import config from '../../../../config/Config.js';

export default async function VerifyFinish(database, application_id) {
    // check if all steps has been submitted

    // general info
    const get_general_info_action = await database.RequestCredit.General.SelectGeneralInfoByApplicationId({application_id: application_id})

    if (get_general_info_action.length == 0){
        return {status: false, message: 'Please complete general info'}
    }

    // license info
    const get_license_info_action = await database.RequestCredit.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: application_id})

    if (get_license_info_action.length == 0){
        return {status: false, message: 'Please complete license info'}
    }

    // contacts (check for titles owner, partner, department) SelectContactsByApplicationIdAndContactTitle
    const get_contacts_info_action_owner = await database.RequestCredit.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'owner'})
    const get_contacts_info_action_partner = await database.RequestCredit.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'partner'})
    const get_contacts_info_action_manager = await database.RequestCredit.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'manager'})
    const get_contacts_info_action_payable = await database.RequestCredit.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'payable'})
    const get_contacts_info_action_receivable = await database.RequestCredit.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'receivable'})

    if (get_contacts_info_action_owner.length == 0 && get_contacts_info_action_partner.length == 0){
        return {status: false, message: 'Please complete owners or partners contacts info'}
    }

    let authorised_signature = false

    for (let i = 0; i < get_contacts_info_action_owner.length; i++){
        if (get_contacts_info_action_owner[i].authorised_signature == 'Yes'){
            authorised_signature = true
        }
    }

    for (let i = 0; i < get_contacts_info_action_partner.length; i++){
        if (get_contacts_info_action_partner[i].authorised_signature == 'Yes'){
            authorised_signature = true
        }
    }

    if (authorised_signature == false){
        return {status: false, message: 'Please select authorised signature'}
    }
    

    if (get_contacts_info_action_manager.length == 0){
        return {status: false, message: 'Please complete manager contacts info'}
    }

    if (get_contacts_info_action_payable.length == 0){
        return {status: false, message: 'Please complete payable contacts info'}
    }

    if (get_contacts_info_action_receivable.length == 0){
        return {status: false, message: 'Please complete receivable contacts info'}
    }


    // bank
    const get_bank_info_action = await database.RequestCredit.BankInfo.SelectBankInfoByApplicationId({application_id: application_id})

    if (get_bank_info_action.length == 0){
        return {status: false, message: 'Please complete bank info'}
    }

    // suppliers
    const get_suppliers_info_action = await database.RequestCredit.Suppliers.SelectSuppliersByApplicationId({application_id: application_id})
    
    if (get_suppliers_info_action.length == 0){
        return {status: false, message: 'Please complete suppliers info'}
    }

    // uploads
    const get_uploads_info_action = await database.RequestCredit.Documents.SelectDocumentsByApplicationId({application_id: application_id})
    
    // get values of all document_type
    const document_types = get_uploads_info_action.map((document) => document.fieldname)

    // check if all required documents are present
    const required_documents = config.Applications.RequestCredit.UploadFields.filter((document) => document.required == true).map((document) => document.field)

    for (let i = 0; i < required_documents.length; i++){
        if (!document_types.includes(required_documents[i])){
            return {status: false, message: 'Please upload all required documents'}
        }
    }

    // requests
    const get_requests_info_action = await database.RequestCredit.Requests.SelectRequestByApplicationId({application_id: application_id})

    if (get_requests_info_action.length == 0){
        return {status: false, message: 'Please complete requests info'}
    }

    return {status: true}
}