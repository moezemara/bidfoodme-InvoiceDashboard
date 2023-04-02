import * as response from '../../../utils/Response.js'
import { randomUUID } from 'crypto'
import VerifyFinish from './utils/VerifyFinish.js'
import { direct_check } from '../../../utils/SchemaChecker.js'
import * as schema from './RequestCredit.Schema.js'
import { ValidateFields } from './utils/FileUtils.js'
import upload from './utils/multer.js'
import config from '../../../config/Config.js'

export async function CreateApplication(req, res) {
    const database = req.app.get('database');
    
    try {
        // check if there is an active application
        const get_active_application_action = await database.RequestCredit.Applications.SelectApplicationByAccountIdAndStatus(
            {
                account_id: req.account_id,
                status: 'incomplete'
            }
        )

        if (get_active_application_action.length > 0){
            return response.fail(res, 'You have an active application')
        }
        
        const application_id = randomUUID()
        const create_action = await database.RequestCredit.Applications.InsertApplication({account_id: req.account_id, application_id: application_id})
        return response.success(res, "Application created successfully")
    } catch (error) {
        return response.system(res, error)
    }
}

export async function LoadSavedProgress(req, res) {
    const database = req.app.get('database');
    
    try {
        const get_active_application_action = await database.RequestCredit.Applications.SelectApplicationByAccountIdAndStatus(
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
        const get_general_info_action = await database.RequestCredit.General.SelectGeneralInfoByApplicationId({application_id: active_application.application_id})
        const general_info = get_general_info_action[0]

        // get license info
        const get_license_info_action = await database.RequestCredit.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: active_application.application_id})
        const license_info = get_license_info_action[0]

        // get contacts info
        const get_contacts_info_action = await database.RequestCredit.Contacts.SelectContactsByApplicationId({application_id: active_application.application_id})

        // get bank info
        const get_bank_info_action = await database.RequestCredit.BankInfo.SelectBankInfoByApplicationId({application_id: active_application.application_id})
        const bank_info = get_bank_info_action[0]

        // get documents info
        const get_documents_info_action = await database.RequestCredit.Documents.SelectDocumentsByApplicationId({application_id: active_application.application_id})

        // get suppliers info
        const get_suppliers_info_action = await database.RequestCredit.Suppliers.SelectSuppliersByApplicationId({application_id: active_application.application_id})

        // get requests info
        const get_requests_info_action = await database.RequestCredit.Requests.SelectRequestByApplicationId({application_id: active_application.application_id})
        const requests_info = get_requests_info_action[0]

        // return response
        return response.success(res, {
            general_info: general_info,
            license_info: license_info,
            contacts_info: get_contacts_info_action,
            bank_info: bank_info,
            documents_info: get_documents_info_action,
            suppliers_info: get_suppliers_info_action,
            requests_info: requests_info
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

        const get_active_application_action = await database.RequestCredit.Applications.SelectApplicationByAccountIdAndStatus(
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
                const get_general_info_action = await database.RequestCredit.General.SelectGeneralInfoByApplicationId({application_id: application_id})
                if (get_general_info_action.length == 0){
                    const create_general_info_action = await database.RequestCredit.General.InsertGeneralInfo({application_id: application_id, ...data})
                } else {
                    const update_general_info_action = await database.RequestCredit.General.UpdateGeneralInfoByApplicationId({application_id: application_id, ...data})
                }
                break;
            case 'license':
                const direct_check_body_license = direct_check(req.body, schema.SavePageProgress_body_license)
                if(!direct_check_body_license.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_license.message) : response.fail(res, 'Invalid request body')
                }
                const get_license_info_action = await database.RequestCredit.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: application_id})
                if (get_license_info_action.length == 0){
                    const create_license_info_action = await database.RequestCredit.LicenseInfo.InsertLicenseInfo({application_id: application_id, ...data})
                }else{
                    const update_license_info_action = await database.RequestCredit.LicenseInfo.UpdateLicenseInfoByApplicationId({application_id: application_id, ...data})
                }
                break;
            case 'contacts':
                const direct_check_contacts = direct_check(req.body, schema.SavePageProgress_body_contacts)
                if(!direct_check_contacts.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_contacts.message) : response.fail(res, 'Invalid request body')
                }
                // delete all contacts of all types
                const delete_contacts_action = await database.RequestCredit.Contacts.DeleteContactsByApplicationId({application_id: application_id})

                // loop on contacts and add them one by one
                for (let i = 0; i < data.length; i++) {
                    const contact = data[i];
                    const create_contacts_info_action = await database.RequestCredit.Contacts.InsertContact({application_id: application_id, ...contact})
                }
                break;
            case 'bank':
                const direct_check_body_bank = direct_check(req.body, schema.SavePageProgress_body_bank)
                if(!direct_check_body_bank.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_bank.message) : response.fail(res, 'Invalid request body')
                }
                const get_bank_info_action = await database.RequestCredit.BankInfo.SelectBankInfoByApplicationId({application_id: application_id})
                if (get_bank_info_action.length == 0){
                    const create_bank_info_action = await database.RequestCredit.BankInfo.InsertBankInfo({application_id: application_id, ...data})
                }else{
                    const update_bank_info_action = await database.RequestCredit.BankInfo.UpdateBankInfoByApplicationId({application_id: application_id, ...data})
                }
                break;
            case 'suppliers':
                const direct_check_body_suppliers = direct_check(req.body, schema.SavePageProgress_body_suppliers)
                if(!direct_check_body_suppliers.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_suppliers.message) : response.fail(res, 'Invalid request body')
                }
                // delete all suppliers and add new ones
                const delete_suppliers_info_action = await database.RequestCredit.Suppliers.DeleteSuppliersByApplicationId({application_id: application_id})
                
                for (let i = 0; i < data.length; i++) {
                    const supplier = data[i];
                    // add supplier
                    const create_suppliers_info_action = await database.RequestCredit.Suppliers.InsertSupplier({application_id: application_id, ...supplier})
                }
                break;
            case 'uploads':

                if(req.files == undefined){
                    return response.fail(res, 'No files selected')
                }

                const validateFields = ValidateFields(req.files)

                if(!validateFields){
                    return response.fail(res, 'Invalid request body')
                }


                // delete all documents and add new ones
                const delete_documents_info_action = await database.RequestCredit.Documents.DeleteDocumentsByApplicationId({application_id: application_id})
                // loop on documents and add them one by one
                const files = req.files

                for (const property in files) {
                    const file = files[property][0];
                    const create_documents_info_action = await database.RequestCredit.Documents.InsertDocument({application_id: application_id, ...file})
                }
                break;
            case 'requests':
                const direct_check_body_requests = direct_check(req.body, schema.SavePageProgress_body_requests)
                if(!direct_check_body_requests.status){
                    return config.ApplicationMode == 'DEVELOPMENT' ? response.fail(res, direct_check_body_requests.message) : response.fail(res, 'Invalid request body')
                }
                const get_requests_info_action = await database.RequestCredit.Requests.SelectRequestByApplicationId({application_id: application_id})
                if (get_requests_info_action.length == 0){
                    const create_requests_info_action = await database.RequestCredit.Requests.InsertRequest({application_id: application_id, ...data})
                }else{
                    const update_requests_info_action = await database.RequestCredit.Requests.UpdateRequestByApplicationId({application_id: application_id, ...data})
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

        const get_active_application_action = await database.RequestCredit.Applications.SelectApplicationByAccountIdAndStatus(
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
        const update_application_time_action = await database.RequestCredit.ApplicationTime.UpdateTimeSpentOnStepByApplicationId(
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
        const get_active_application_action = await database.RequestCredit.Applications.SelectApplicationByAccountIdAndStatus(
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
        const get_time_spent_action = await database.RequestCredit.ApplicationTime.SelectApplicationTimeByApplicationId(
            {
                application_id: application_id
            }
        )

        let total_time_spent = 0
        
        total_time_spent += 
            get_time_spent_action[0].general + 
            get_time_spent_action[0].contacts + 
            get_time_spent_action[0].references +
            get_time_spent_action[0].uploads


        if (!total_time_spent){
            total_time_spent = 0
        }

        // update total time spent
        const update_application_time_action = await database.RequestCredit.ApplicationTime.UpdateTimeSpentOnStepByApplicationId(
            {
                application_id: application_id,
                step: "total_time",
                time_spent: total_time_spent
            }
        )

        // update submission date
        const update_submission_date_action = await database.RequestCredit.ApplicationTime.UpdateSubmissionDateByApplicationId(
            {
                application_id: application_id
            }
        )

        // update application status
        const update_application_status_action = await database.RequestCredit.Applications.UpdateApplicationStatusByApplicationId(
            {
                application_id: application_id,
                status: 'submitted'
            }
        )


        return response.success(res, 'Application finished successfully')
    } catch (error) {
        return response.system(res, error)
    }
}