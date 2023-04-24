import joi from 'joi'
import config from '../../../config/Config.js'
// import countries from '../../../utils/Countries.js'

export const SavePageProgress_params = joi.object({
    step: joi.string().valid(...config.Applications.RegisterBranch.Pages).required()
})

export const SavePageProgress_body_general = joi.object({
    outlet_legal_name: joi.string().required(),
    outlet_trade_name: joi.string().required(),
    outlet_group_name: joi.string().required(),
    billing_outlet_address: joi.string().required(),
    billing_country: joi.string().required(),
    billing_city: joi.string().required(),
    billing_phone: joi.string().required(),
    billing_po_box: joi.string().required(),
    delivery_outlet_address: joi.string().required(),
    delivery_country: joi.string().required(),
    delivery_city: joi.string().required(),
    delivery_phone: joi.string().required(),
    delivery_po_box: joi.string().required(),
    service_years: joi.number().integer().min(0).max(100).required(),
    website_url: joi.string().required()
})

export const SavePageProgress_body_license = joi.object({
    vat_number: joi.string().required(),
    license_number: joi.string().required(),
    license_expiration: joi.date().required()
})

export const SavePageProgress_body_contacts = joi.array().items(joi.object({
    title: joi.string().required(),
    name: joi.string().required(),
    phone: joi.string().optional(),
    mobile: joi.string().optional(),
    email: joi.string().email().optional(),
    shareholder_percentage: joi.number().integer().min(0).max(100).optional(),
    authorised_signature: joi.string().optional()
}))

export const SavePageProgress_body_bank = joi.object({
    bank_name: joi.string().required(),
    bank_branch: joi.string().required(),
    bank_account_number: joi.string().required(),
    bank_iban: joi.string().required(),
    bank_swift: joi.string().required(),
    bank_account_type: joi.string().valid('Current', 'Saving','Other').required()
})

export const SavePageProgress_body_suppliers = joi.array().items(joi.object({
    name: joi.string().required(),
    contact: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().email().required()
}))

export const SavePageProgress_body_requests = joi.object({
    credit_limit: joi.number().required()
})

export const UpdateTimeSpent_params = joi.object({
    step: joi.string().valid(...config.Applications.RegisterBranch.UiPages).required()
})

export const UpdateTimeSpent_body = joi.object({
    time_spent: joi.number().integer().min(0).max(60*60*24).required()
})