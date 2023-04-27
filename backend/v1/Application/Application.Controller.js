import * as response from '../../utils/Response.js'
import config from '../../config/Config.js'
import fs from 'fs'
import axios from 'axios'
import Oauth1Helper from './utils/Oauth1Helper.js'
import fetch from 'node-fetch'

export async function DocuSignWebHook(req, res) {
    const database = req.app.get('database');


    const body = req.body
    const document_name = body.data.envelopeSummary.envelopeDocuments[0].name
    const signed_document = body.data.envelopeSummary.envelopeDocuments[0].PDFBytes
    const envelope_id = body.data.envelopeId
    const signing_date = body.data.envelopeSummary.completedDateTime
    const status = body.data.envelopeSummary.status

    let application_id = 0
    let account_id = 0

    let general_info = {}
    let license_info = {}
    let contacts_info = []
    let bank_info = {}
    let suppliers_info = []
    let requests_info = {}
    let documents_info = []

    if (status != "completed"){
        return response.fail(res, "Envelope not completed")
    }

    if (document_name == "Credit Application Form"){
        const get_envelope_action = await database.RequestCredit.DocusignEnvelopes.SelectEnvelopeByEnvelopeId({envelope_id: envelope_id})
        if (get_envelope_action.length == 0){
            return response.fail(res, "Invalid envelope id")
        }

        const envelope_action = get_envelope_action[0]

        if (envelope_action.status == "completed"){
            //return response.fail(res, "Envelope already completed")
        }

        application_id = envelope_action.application_id

        // get account id
        const get_account_action = await database.RequestCredit.Applications.SelectApplicationByApplicationId({application_id: application_id})
        if (get_account_action.length == 0){
            return response.fail(res, "Invalid application id")
        }

        const account_action = get_account_action[0]
        account_id = account_action.account_id

        // get form data
        const get_general_info_action = await database.RequestCredit.General.SelectGeneralInfoByApplicationId({application_id: application_id})
        const get_license_info_action = await database.RequestCredit.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: application_id})
        const get_contacts_info_action = await database.RequestCredit.Contacts.SelectContactsByApplicationId({application_id: application_id})
        const get_bank_info_action = await database.RequestCredit.BankInfo.SelectBankInfoByApplicationId({application_id: application_id})
        const get_suppliers_info_action = await database.RequestCredit.Suppliers.SelectSuppliersByApplicationId({application_id: application_id})
        const get_requests_info_action = await database.RequestCredit.Requests.SelectRequestByApplicationId({application_id: application_id})
        const get_documents_action = await database.RequestCredit.Documents.SelectDocumentsByApplicationIdFullData({application_id: application_id})

        general_info = get_general_info_action[0]
        license_info = get_license_info_action[0]
        contacts_info = get_contacts_info_action
        bank_info = get_bank_info_action[0]
        suppliers_info = get_suppliers_info_action
        requests_info = get_requests_info_action[0]
        documents_info = get_documents_action


    }else if(document_name == "Customer Outlet Information Sheet"){
        const get_envelope_action = await database.RegisterBranch.DocusignEnvelopes.SelectEnvelopeByEnvelopeId({envelope_id: envelope_id})
        if (get_envelope_action.length == 0){
            return response.fail(res, "Invalid envelope id")
        }

        const envelope_action = get_envelope_action[0]

        if (envelope_action.status == "completed"){
            //return response.fail(res, "Envelope already completed")
        }

        application_id = envelope_action.application_id

        // get account id
        const get_account_action = await database.RegisterBranch.Applications.SelectApplicationByApplicationId({application_id: application_id})
        if (get_account_action.length == 0){
            return response.fail(res, "Invalid application id")
        }

        const account_action = get_account_action[0]
        account_id = account_action.account_id

        // get form data
        const get_general_info_action = await database.RegisterBranch.General.SelectGeneralInfoByApplicationId({application_id: application_id})
        const get_license_info_action = await database.RegisterBranch.LicenseInfo.SelectLicenseInfoByApplicationId({application_id: application_id})
        const get_contacts_info_action = await database.RegisterBranch.Contacts.SelectContactsByApplicationId({application_id: application_id})
        const get_requests_info_action = await database.RegisterBranch.Requests.SelectRequestByApplicationId({application_id: application_id})
        const get_documents_action = await database.RegisterBranch.Documents.SelectDocumentsByApplicationIdFullData({application_id: application_id})

        general_info = get_general_info_action[0]
        license_info = get_license_info_action[0]
        contacts_info = get_contacts_info_action
        requests_info = get_requests_info_action[0]
        documents_info = get_documents_action
    }else{
        return response.fail(res, "Invalid document name")
    }

    // rename contacts info fields phone to phoneNumber and mobile to mobileNumber
    contacts_info.forEach(contact => {
        contact.phoneNumber = contact.phone
        contact.mobileNumber = contact.mobile
        contact.title != "Owner" && contact.title != "Partner" && contact.title != "Manager" ? undefined : contact.shareHolderPecentage = contact.shareholder_percentage + "%"
        contact.signedByPartner = contact.authorised_signature || undefined
        delete contact.phone
        delete contact.mobile
        delete contact.authorised_signature
        delete contact.shareholder_percentage
    })

    // filter out contacts with title owner, partner and manager
    const owners = contacts_info.filter(contact => contact.title == "Owner" || contact.title == "Partner" || contact.title == "Manager")
    const departments = contacts_info.filter(contact => contact.title != "Owner" && contact.title != "Partner" && contact.title != "Manager")

    // load documents
    const tradeLicense = documents_info.find(document => document.fieldname == "license")
    const ownerPassport = documents_info.find(document => document.fieldname == "owner_pp")
    const ownerVisa = documents_info.find(document => document.fieldname == "owner_visa")
    const ownerVisaElo = documents_info.find(document => document.fieldname == "owner_eid")
    const vatCertification = documents_info.find(document => document.fieldname == "vat")

    // read documents
    const tradeLicenseFile = await fs.readFileSync(tradeLicense.path)
    const ownerPassportFile = await fs.readFileSync(ownerPassport.path)
    const ownerVisaFile = await fs.readFileSync(ownerVisa.path)
    const ownerVisaEloFile = await fs.readFileSync(ownerVisaElo.path)
    let vatCertificationFile = null
    vatCertification != undefined ? vatCertificationFile = await fs.readFileSync(vatCertification.path) : undefined

    // encode documents
    const tradeLicenseFileEncoded = tradeLicenseFile.toString('base64')
    const ownerPassportFileEncoded = ownerPassportFile.toString('base64')
    const ownerVisaFileEncoded = ownerVisaFile.toString('base64')
    const ownerVisaEloFileEncoded = ownerVisaEloFile.toString('base64')
    let vatCertificationFileEncoded = null
    vatCertification != undefined ? vatCertificationFileEncoded = vatCertificationFile.toString('base64') : undefined
    
    // split address into half using word count
    const splitAddress = (address, half_number) => {
        const words = address.split(" ")
        const half = Math.ceil(words.length / 2)
        const firstHalf = words.splice(0, half).join(" ")
        const secondHalf = words.join(" ")
        const halfs = [firstHalf, secondHalf]
        return halfs[half_number-1]
    }


    // construct data
    const data = {
        apiType: "processCAF",
        customerId: account_id,
        legalName: general_info.outlet_legal_name,
        tradeName: general_info.outlet_trade_name,
        billingAddress: {
            address1: splitAddress(general_info.billing_outlet_address, 1),
            address2: splitAddress(general_info.billing_outlet_address, 2),
            city: general_info.billing_city,
            country: general_info.billing_country,
            phoneNumber: general_info.billing_phone,
            poBoxNumber: general_info.billing_po_box
        },
        shippingAddress: {
            address1: splitAddress(general_info.delivery_outlet_address, 1),
            address2: splitAddress(general_info.delivery_outlet_address, 2),
            city: general_info.delivery_city,
            country: general_info.delivery_country,
            phoneNumber: general_info.delivery_phone,
            poBoxNumber: general_info.delivery_po_box
        },
        tradeLicenseNumber: license_info.license_number,
        tradeLicenseExpirationDate: license_info.license_expiration.split("/").map((str) => parseInt(str)),
        yearsInFund: general_info.service_years,
        vatRegistrationNumber: license_info.vat_number,
        bankDetails: {
            bankName: bank_info?.bank_name || undefined,
            city: bank_info?.bank_city || undefined,
            swift: bank_info?.bank_swift || undefined,
            ibanNumber: bank_info?.bank_iban || undefined,
            account: bank_info?.bank_account_number || undefined,
            accountType: bank_info?.bank_account_type || undefined,
        },
        tradeLicense: tradeLicenseFileEncoded,
        ownerPassport: ownerPassportFileEncoded,
        ownerVisa: ownerVisaFileEncoded,
        ownerVisaElo: ownerVisaEloFileEncoded,
        vatCertification: vatCertificationFileEncoded,
        signedDocument: signed_document, // base64
        creditLimit: requests_info.credit_limit,
        creditPeriod: requests_info.credit_period,
        partnerDetails: owners,
        accountDetails: departments,
        supplierDetails: suppliers_info
    }
    
    // update docusign envelope status
    if (document_name == "Credit Application Form") {
        const update_envelope_action = await database.RequestCredit.DocusignEnvelopes.UpdateEnvelopeStatusAndSigningDate({envelope_id: envelope_id, status: "completed", signing_date: new Date(signing_date)})
    }else if(document_name == "Customer Outlet Information Sheet"){
        const update_envelope_action = await database.RegisterBranch.DocusignEnvelopes.UpdateEnvelopeStatusAndSigningDate({envelope_id: envelope_id, status: "completed", signing_date: new Date(signing_date)})
    }else{
        return response.fail(res, "Invalid document name")
    }

    
    // send data to api
    const request = {
        method: 'POST',
        url: config.caf.api_url,
        body: data
    }

    const authHeader = Oauth1Helper.getAuthHeaderForRequest(request)

    const caf_response = await fetch(request.url, {
        method: 'POST',
        body: JSON.stringify(request.body),
        headers: { Authorization: authHeader.Authorization, 'Content-Type': 'application/json' }
    })

    const caf_response_json = await caf_response.json()

    return response.success(res, {caf_response_json: caf_response_json, data})
}