import config from '../../../../config/Config.js';

export default async function VerifyFinish(database, application_id) {
    // check if all steps has been submitted

    // general info
    const get_general_info_action = await database.RegisterBranch.General.SelectGeneralInfoByApplicationId({application_id: application_id})

    if (get_general_info_action.length == 0){
        return {status: false, message: 'Please complete general info'}
    }

    // license info
    const get_license_info_action = await database.RegisterBranch.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: application_id})

    if (get_license_info_action.length == 0){
        return {status: false, message: 'Please complete license info'}
    }

    // contacts (check for titles owner, partner, department) SelectContactsByApplicationIdAndContactTitle
    const get_contacts_info_action_owner = await database.RegisterBranch.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'Owner'})
    const get_contacts_info_action_partner = await database.RegisterBranch.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'Partner'})
    const get_contacts_info_action_manager = await database.RegisterBranch.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'Manager'})
    const get_contacts_info_action_financemanager = await database.RegisterBranch.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'Finance Manager'})
    const get_contacts_info_action_payable = await database.RegisterBranch.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'Accounts Payable'})
    const get_contacts_info_action_purchasing = await database.RegisterBranch.Contacts.SelectContactsByApplicationIdAndContactTitle({application_id: application_id, title: 'Purchasing Manager'})

    if (get_contacts_info_action_owner.length == 0 && get_contacts_info_action_partner.length == 0 && get_contacts_info_action_manager.length == 0){
        return {status: false, message: 'Please complete owners or partners contacts info'}
    }

    if (get_contacts_info_action_financemanager.length == 0){
        return {status: false, message: 'Please complete finance manager contact info'}
    }

    if (get_contacts_info_action_payable.length == 0){
        return {status: false, message: 'Please complete accounts payable contact info'}
    }

    if (get_contacts_info_action_purchasing.length == 0){
        return {status: false, message: 'Please complete purchasing manager contact info'}
    }

    // ensure that department emails are not same as owners and partners
    const owner_emails = get_contacts_info_action_owner.map((contact) => contact.email)
    const partner_emails = get_contacts_info_action_partner.map((contact) => contact.email)
    const manager_emails = get_contacts_info_action_manager.map((contact) => contact.email)
    const finance_manager_emails = get_contacts_info_action_financemanager.map((contact) => contact.email)
    const accounts_payable_emails = get_contacts_info_action_payable.map((contact) => contact.email)
    const purchasing_manager_emails = get_contacts_info_action_purchasing.map((contact) => contact.email)

    const owners_emails = [...owner_emails, ...partner_emails, ...manager_emails]

    if (owners_emails.includes(finance_manager_emails[0])){
        return {status: false, message: 'Finance manager email should not be same as owners or partners'}
    }

    if (owners_emails.includes(accounts_payable_emails[0])){
        return {status: false, message: 'Accounts payable email should not be same as owners or partners'}
    }

    if (owners_emails.includes(purchasing_manager_emails[0])){
        return {status: false, message: 'Purchasing manager email should not be same as owners or partners'}
    }
    
    // ensure that names are no duplicate for all contacts
    const owner_names = get_contacts_info_action_owner.map((contact) => contact.name)
    const partner_names = get_contacts_info_action_partner.map((contact) => contact.name)
    const manager_names = get_contacts_info_action_manager.map((contact) => contact.name)
    const finance_manager_names = get_contacts_info_action_financemanager.map((contact) => contact.name)
    const accounts_payable_names = get_contacts_info_action_payable.map((contact) => contact.name)
    const purchasing_manager_names = get_contacts_info_action_purchasing.map((contact) => contact.name)

    const contacts_names = [...owner_names, ...partner_names, ...manager_names, ...finance_manager_names, ...accounts_payable_names, ...purchasing_manager_names]
    const duplicate_names = contacts_names.filter((name, index) => contacts_names.indexOf(name) != index)

    if (duplicate_names.length > 0){
        return {status: false, message: 'Duplicate names are not allowed for contacts'}
    }

    // uploads
    const get_uploads_info_action = await database.RegisterBranch.Documents.SelectDocumentsByApplicationId({application_id: application_id})
    
    // get values of all document_type
    const document_types = get_uploads_info_action.map((document) => document.fieldname)

    // check if all required documents are present
    const required_documents = config.Applications.RegisterBranch.UploadFields.filter((document) => document.required == true).map((document) => document.field)

    for (let i = 0; i < required_documents.length; i++){
        if (!document_types.includes(required_documents[i])){
            return {status: false, message: 'Please upload all required documents'}
        }
    }

    // signatures
    const get_signatures_info_action = await database.RegisterBranch.AuthorisedSignatures.SelectAuthorisedSignaturesByApplicationId({application_id: application_id})

    if (get_signatures_info_action.length != 2){
        return {status: false, message: 'Please complete signatures info'}
    }

    if (get_signatures_info_action[0].name == get_signatures_info_action[1].name){
        return {status: false, message: 'Duplicate names are not allowed for signatures'}
    }

    if (get_signatures_info_action[0].email == get_signatures_info_action[1].email){
        return {status: false, message: 'Duplicate emails are not allowed for signatures'}
    }


    // requests
    const get_requests_info_action = await database.RegisterBranch.Requests.SelectRequestByApplicationId({application_id: application_id})

    if (get_requests_info_action.length == 0){
        return {status: false, message: 'Please complete requests info'}
    }

    return {status: true}
}