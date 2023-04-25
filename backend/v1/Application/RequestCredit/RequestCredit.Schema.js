import joi from 'joi'
import config from '../../../config/Config.js'
// import countries from '../../../utils/Countries.js'

export const SavePageProgress_params = joi.object({
    step: joi.string().valid(...config.Applications.RequestCredit.Pages).required().label('Step')
})

export const SavePageProgress_body_general = joi.object({
    outlet_legal_name: joi.string().required().label('Outlet Legal Name'),
    outlet_trade_name: joi.string().required().label('Outlet Trade Name'),
    billing_outlet_address: joi.string().required().label('Outlet Billing Address'),
    billing_country: joi.string().required().label('Outlet Billing Country'),
    billing_city: joi.string().required().label('Outlet Billing City'),
    billing_phone: joi.number().integer().required().label('Outlet Billing Phone'),
    billing_po_box: joi.string().required().label('Outlet Billing PO Box'),
    delivery_outlet_address: joi.string().required().label('Outlet Delivery Address'),
    delivery_country: joi.string().required().label('Outlet Delivery Country'),
    delivery_city: joi.string().required().label('Outlet Delivery City'),
    delivery_phone: joi.number().integer().required().label('Outlet Delivery Phone'),
    delivery_po_box: joi.string().required().label('Outlet Delivery PO Box'),
    service_years: joi.number().integer().min(0).max(100).required().label('Service Years'),
    website_url: joi.string().uri().required().label('Website URL')
})

export const SavePageProgress_body_license = joi.object({
    vat_number: joi.string().required().label('VAT Number'),
    license_number: joi.string().required().label('License Number'),
    license_expiration: joi.date().required().label('License Expiry Date')
})

export const SavePageProgress_body_contacts = joi.array().items(joi.object({
    title: joi.string().required().label('Contact Title'),
    name: joi.string().required().label('Contact Name'),
    phone: joi.number().integer().optional().label('Contact Phone'),
    mobile: joi.number().integer().optional().label('Contact Mobile'),
    email: joi.string().email().optional().label('Contact Email'),
    shareholder_percentage: joi.number().integer().min(0).max(100).optional().label('Shareholder Percentage'),
    authorised_signature: joi.string().optional().label('Authorised Signature')
}))

export const SavePageProgress_body_bank = joi.object({
    bank_name: joi.string().required().label('Bank Name'),
    bank_branch: joi.string().required().label('Bank Branch'),
    bank_account_number: joi.number().integer().required().label('Bank Account Number'),
    bank_iban: joi.string().required().label('Bank IBAN'),
    bank_swift: joi.string().required().label('Bank SWIFT'),
    bank_account_type: joi.string().valid('Current', 'Saving','Other').required().label('Bank Account Type'),
})

export const SavePageProgress_body_suppliers = joi.array().items(joi.object({
    name: joi.string().required().label('Supplier Name'),
    contact: joi.string().required().label('Supplier Contact'),
    address: joi.string().required().label('Supplier Address'),
    phone: joi.number().integer().required().label('Supplier Phone'),
    email: joi.string().email().required().label('Supplier Email'),
}))

export const SavePageProgress_body_uploads = joi.object({
    hasVatCert: joi.string().valid('yes', 'no').required().label('Has VAT Certificate'),
    license: joi.optional().label('License'),
    vat: joi.optional().label('VAT Certificate'),
    owner_pp: joi.optional().label('Owner Passport'),
    owner_visa: joi.optional().label('Owner Visa'),
    owner_eid: joi.optional().label('Owner EID')
})

export const SavePageProgress_body_requests = joi.object({
    credit_limit: joi.number().required().label('Credit Limit'),
})

export const UpdateTimeSpent_params = joi.object({
    step: joi.string().valid(...config.Applications.RequestCredit.UiPages).required().label('Step')
})

export const UpdateTimeSpent_body = joi.object({
    time_spent: joi.number().integer().min(0).max(60*60*24).required().label('Time Spent')
})