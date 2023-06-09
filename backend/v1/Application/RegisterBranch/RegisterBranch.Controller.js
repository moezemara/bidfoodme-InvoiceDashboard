import * as response from '../../../utils/Response.js'
import { randomUUID } from 'crypto'
import VerifyFinish from './utils/VerifyFinish.js'
import { direct_check } from '../../../utils/SchemaChecker.js'
import * as schema from './RegisterBranch.Schema.js'
import { ValidateFields } from './utils/FileUtils.js'
import upload from './utils/multer.js'
import config from '../../../config/Config.js'
import {refreshAccessToken, sendEnvelope} from '../../../docusign/DocuSignHandler.js'

export async function CreateApplication(req, res) {
    const database = req.app.get('database');
    
    try {
        // check if there is an active application
        const get_active_application_action = await database.RegisterBranch.Applications.SelectApplicationByAccountIdAndStatus(
            {
                account_id: req.account_id,
                status: 'incomplete'
            }
        )

        if (get_active_application_action.length > 0){
            return response.fail(res, 'You have an active application')
        }
        
        const application_id = randomUUID()
        const create_action = await database.RegisterBranch.Applications.InsertApplication({account_id: req.account_id, application_id: application_id})
        return response.success(res, "Application created successfully")
    } catch (error) {
        return response.system(res, error)
    }
}

export async function LoadSavedProgress(req, res) {
    const database = req.app.get('database');
    
    try {
        const get_active_application_action = await database.RegisterBranch.Applications.SelectApplicationByAccountIdAndStatus(
            {
                account_id: req.account_id, 
                status: 'incomplete'
            }
        )

        if (get_active_application_action.length == 0){
            return response.fail(res, 'No saved progress found')
        }

        const active_application = get_active_application_action[0]

        // get application data

        // get general info
        const get_general_info_action = await database.RegisterBranch.General.SelectGeneralInfoByApplicationId({application_id: active_application.application_id})
        const general_info = get_general_info_action[0]

        // get license info
        const get_license_info_action = await database.RegisterBranch.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: active_application.application_id})
        const license_info = get_license_info_action[0]

        // get contacts info
        const get_contacts_info_action = await database.RegisterBranch.Contacts.SelectContactsByApplicationId({application_id: active_application.application_id})

        // get documents info
        const get_documents_info_action = await database.RegisterBranch.Documents.SelectDocumentsByApplicationId({application_id: active_application.application_id})

        // get requests info
        const get_requests_info_action = await database.RegisterBranch.Requests.SelectRequestByApplicationId({application_id: active_application.application_id})
        const requests_info = get_requests_info_action[0]

        // get authorised signatures info
        const get_authorised_signatures_info_action = await database.RegisterBranch.AuthorisedSignatures.SelectAuthorisedSignaturesByApplicationId({application_id: active_application.application_id})


        // return response
        return response.success(res, {
            general_info: general_info,
            license_info: license_info,
            contacts_info: get_contacts_info_action,
            documents_info: get_documents_info_action,
            requests_info: requests_info,
            authorised_signatures_info: get_authorised_signatures_info_action
        })

    } catch (error) {
        return response.system(res, error)
    }
}

export async function SavePageProgress(req, res, next) {
    const database = req.app.get('database');
    
    try {
        const step = req.params.step
        const data = req.body

        const get_active_application_action = await database.RegisterBranch.Applications.SelectApplicationByAccountIdAndStatus(
            {
                account_id: req.account_id, 
                status: 'incomplete'
            }
        )

        if (get_active_application_action.length == 0){
            return response.fail(res, 'No saved progress found')
        }

        const active_application = get_active_application_action[0]
        const application_id = active_application.application_id

        // update page data
        switch (step) {
            case 'general':
                const direct_check_body = direct_check(req.body, schema.SavePageProgress_body_general)
                if(!direct_check_body.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body.message) : response.fail(res, 'Invalid request body')
                }
                const get_general_info_action = await database.RegisterBranch.General.SelectGeneralInfoByApplicationId({application_id: application_id})
                if (get_general_info_action.length == 0){
                    const create_general_info_action = await database.RegisterBranch.General.InsertGeneralInfo({application_id: application_id, ...data})
                } else {
                    const update_general_info_action = await database.RegisterBranch.General.UpdateGeneralInfoByApplicationId({application_id: application_id, ...data})
                }
                break;
            case 'license':
                const direct_check_body_license = direct_check(req.body, schema.SavePageProgress_body_license)
                if(!direct_check_body_license.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_license.message) : response.fail(res, 'Invalid request body')
                }

                const today = new Date()
                if (data.license_expiry_date){
                    const license_expiry_date = new Date(data.license_expiration)
                    if (license_expiry_date < today){
                        return response.fail(res, 'License expiry date must be valid')
                    }
                }
                
                const get_license_info_action = await database.RegisterBranch.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: application_id})
                if (get_license_info_action.length == 0){
                    const create_license_info_action = await database.RegisterBranch.LicenseInfo.InsertLicenseInfo({application_id: application_id, ...data})
                }else{
                    const update_license_info_action = await database.RegisterBranch.LicenseInfo.UpdateLicenseInfoByApplicationId({application_id: application_id, ...data})
                }
                break;
            case 'contacts':
                const direct_check_contacts = direct_check(req.body, schema.SavePageProgress_body_contacts)
                if(!direct_check_contacts.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_contacts.message) : response.fail(res, 'Invalid request body')
                }
                // delete all contacts of all types
                const delete_contacts_action = await database.RegisterBranch.Contacts.DeleteContactsByApplicationId({application_id: application_id})

                // loop on contacts and add them one by one
                for (let i = 0; i < data.length; i++) {
                    const contact = data[i];
                    const create_contacts_info_action = await database.RegisterBranch.Contacts.InsertContact({application_id: application_id, ...contact})
                }
                break;
            case 'uploads':
                const direct_check_body_uploads = direct_check(req.body, schema.SavePageProgress_body_uploads)
                if(!direct_check_body_uploads.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_uploads.message) : response.fail(res, 'Invalid request body')
                }

                if(req.files == undefined){
                    return response.fail(res, 'No documents found')
                }
                
                const previous_documents = await database.RegisterBranch.Documents.SelectDocumentsByApplicationId({application_id: application_id})

                if(previous_documents.length == 0 && req.files.length == 0){
                    return response.fail(res, 'No documents found')
                }

                const previous_fields = previous_documents.map(document => document.fieldname)

                const validateFields = ValidateFields(req.files, previous_fields)

                if(!validateFields){
                    return response.fail(res, 'Failed to validate uploaded documents')
                }

                const files = req.files

                // delete all documents that are in req.files
                if (Object.keys(files).length > 0){
                    for(const property in files){
                        const file = files[property][0];
                        const delete_documents_info_action = await database.RegisterBranch.Documents.DeleteDocumentsByApplicationIdAndFieldName({application_id: application_id, fieldname: file.fieldname})
                    }
                }

                // delete vat document if hasVatCert is false
                if (data.hasVatCert == 'no'){
                    const delete_documents_info_action = await database.RegisterBranch.Documents.DeleteDocumentsByApplicationIdAndFieldName({application_id: application_id, fieldname: 'vat'})
                }

                // loop on documents and add them one by one

                for (const property in files) {
                    const file = files[property][0];
                    
                    if (data.hasVatCert == 'no' && file.fieldname == 'vat'){
                        continue;
                    }

                    const create_documents_info_action = await database.RegisterBranch.Documents.InsertDocument({application_id: application_id, ...file})
                }
                break;
            case 'signatures':
                const direct_check_body_signatures = direct_check(req.body, schema.SavePageProgress_body_signatures)
                if(!direct_check_body_signatures.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_signatures.message) : response.fail(res, 'Invalid request body')
                }
                // delete all signatures and add new ones
                const delete_signatures_info_action = await database.RegisterBranch.AuthorisedSignatures.DeleteSignaturesByApplicationId({application_id: application_id})

                // loop on signatures and add them one by one
                for (let i = 0; i < data.length; i++) {
                    const signature = data[i];
                    const create_signatures_info_action = await database.RegisterBranch.AuthorisedSignatures.InsertAuthorisedSignatures({application_id: application_id, ...signature})
                }
                break;
            case 'requests':
                const direct_check_body_requests = direct_check(req.body, schema.SavePageProgress_body_requests)
                if(!direct_check_body_requests.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_requests.message) : response.fail(res, 'Invalid request body')
                }
                const get_requests_info_action = await database.RegisterBranch.Requests.SelectRequestByApplicationId({application_id: application_id})
                if (get_requests_info_action.length == 0){
                    const create_requests_info_action = await database.RegisterBranch.Requests.InsertRequest({application_id: application_id, ...data})
                }else{
                    const update_requests_info_action = await database.RegisterBranch.Requests.UpdateRequestByApplicationId({application_id: application_id, ...data})
                }
                break;
            default:
                return response.success(res, 'No progress saved')
                break;
        }

        return response.success(res, 'Page progress has been saved successfully')
    } catch (error) {
        return response.system(res, error)
    }
}

// update time spent on speceific page
export async function UpdateTimeSpent(req, res) {
    const database = req.app.get('database');
    
    try {
        const step = req.params.step
        const time_spent = req.body.time_spent

        const get_active_application_action = await database.RegisterBranch.Applications.SelectApplicationByAccountIdAndStatus(
            {
                account_id: req.account_id, 
                status: 'incomplete'
            }
        )

        if (get_active_application_action.length == 0){
            return response.fail(res, 'No saved progress found')
        }

        const active_application = get_active_application_action[0]
        const application_id = active_application.application_id

        // update page data
        const update_application_time_action = await database.RegisterBranch.ApplicationTime.UpdateTimeSpentOnStepByApplicationId(
            {
                application_id: application_id,
                step: step,
                time_spent: time_spent
            }
        )


        return response.success(res, 'Time spent updated successfully')
    } catch (error) {
        return response.system(res, error)
    }

}

// finish application
export async function FinishApplication(req, res) {
    const database = req.app.get('database');
    
    try {
        const get_active_application_action = await database.RegisterBranch.Applications.SelectApplicationByAccountIdAndStatus(
            {
                account_id: req.account_id, 
                status: 'incomplete'
            }
        )

        if (get_active_application_action.length == 0){
            return response.fail(res, 'No saved progress found')
        }

        const active_application = get_active_application_action[0]
        const application_id = active_application.application_id


        // check if all pages are completed
        const finish_verify = await VerifyFinish(database, application_id)

        if (finish_verify.status == false){
            return response.fail(res, finish_verify.message)
        }

        // calculate total time spent
        const get_time_spent_action = await database.RegisterBranch.ApplicationTime.SelectApplicationTimeByApplicationId(
            {
                application_id: application_id
            }
        )

        let total_time_spent = 0
        
        total_time_spent += 
            get_time_spent_action[0].general + 
            get_time_spent_action[0].contacts + 
            get_time_spent_action[0].uploads


        if (!total_time_spent){
            total_time_spent = 0
        }

        // update application status
        const update_application_status_action = await database.RegisterBranch.Applications.UpdateApplicationStatusByApplicationId(
            {
                application_id: application_id,
                status: 'submitted'
            }
        )

        // update total time spent
        const update_application_time_action = await database.RegisterBranch.ApplicationTime.UpdateTimeSpentOnStepByApplicationId(
            {
                application_id: application_id,
                step: "total_time",
                time_spent: total_time_spent
            }
        )

        // update submission date
        const update_submission_date_action = await database.RegisterBranch.ApplicationTime.UpdateSubmissionDateByApplicationId(
            {
                application_id: application_id
            }
        )

        // sign document
        const sign_document_action = await DocuSign(database, application_id)


        return response.success(res, 'Application finished successfully, envelope_id: ' + sign_document_action)
    } catch (error) {
        return response.system(res, error)
    }
}

async function DocuSign(database, application_id) {
    let token = await database.DocuSign.SelectAccessToken()

    if (token === undefined) {
        token = await database.DocuSign.SelectLastExpiredToken()
        if (token === undefined) {
            return response.fail(res, 'No token found')
        }
    }

    // if token is expired, refresh it
    // token.created_at is in date format
    const create_time = Math.floor(token.created_at.getTime() / 1000)
    const current_time = Math.floor(Date.now() / 1000)


    if (current_time - create_time + 60 > token.expires_in) {
        const new_token = await refreshAccessToken(token)

        if (new_token == false) {
            return response.fail(res, 'Failed to refresh token')
        }

        await database.DocuSign.UpdateTokenStatus({id: token.id, expired: 1})
        await database.DocuSign.InsertAccessToken(new_token)
        token = new_token
    }


    // get form data
    const get_general_info_action = await database.RegisterBranch.General.SelectGeneralInfoByApplicationId({application_id: application_id})
    const get_license_info_action = await database.RegisterBranch.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: application_id})
    const get_contacts_info_action = await database.RegisterBranch.Contacts.SelectContactsByApplicationId({application_id: application_id})
    const get_signatures_info_action = await database.RegisterBranch.AuthorisedSignatures.SelectAuthorisedSignaturesByApplicationId({application_id: application_id})
    const get_requests_info_action = await database.RegisterBranch.Requests.SelectRequestByApplicationId({application_id: application_id})


    const document_data = {
        ...get_general_info_action[0],
        ...get_license_info_action[0],
        ...get_requests_info_action[0],
        owners: get_contacts_info_action.filter(contact => contact.title == "Owner" || contact.title == "Partner" || contact.title == "Manager"),
        departments: get_contacts_info_action.filter(contact => contact.title != "Owner" && contact.title != "Partner" && contact.title != "Manager"),
        authorised_signatures: get_signatures_info_action,
        document_type: "CustomerOutletInformationSheet"
    }


    const envelopeArgs = {
        status: "sent",
        document_data: document_data
    }
    
    const args = {
        accessToken: token.access_token,
        envelopeArgs: envelopeArgs
    }

    const envelope = await sendEnvelope(args)

    // save envelope
    const save_envelope_action = await database.RegisterBranch.DocusignEnvelopes.InsertEnvelope({
        application_id: application_id,
        envelope_id: envelope,
        recipient_email: get_signatures_info_action[0].email
    })


    return envelope
}