import joi from 'joi'
import config from '../../../config/Config.js'
import countries from '../../../utils/countries.js'

export const SavePageProgress_params = joi.object({
    step: joi.string().valid(...config.Applications.RegisterBranch.Pages).required()
})

export const SavePageProgress_body_general = joi.object({
    name: joi.string().required(),
    city: joi.string().required(),
    address: joi.string().required(),
    service_years: joi.number().integer().min(0).max(100).required()
})

export const SavePageProgress_body_license = joi.object({
    license_number: joi.string().required(),
    vat_number: joi.string().required(),
    license_expiration: joi.date().required()
})

export const SavePageProgress_body_contacts = joi.array().items(joi.object({
    type: joi.string().valid(...config.Applications.RegisterBranch.ContactTypes).required(),
    name: joi.string().required(),
    email: joi.string().email().optional(),
    phone: joi.string().optional(),
    nationality: joi.string().valid(...countries).optional()
}))

export const SavePageProgress_body_bank = joi.object({
    bank_name: joi.string().required(),
    bank_city: joi.string().required(),
    bank_account_number: joi.string().required(),
    bank_iban: joi.string().required(),
    bank_swift: joi.string().required(),
    bank_account_type: joi.string().required()
})

export const SavePageProgress_body_suppliers = joi.array().items(joi.object({
    name: joi.string().required(),
    contact: joi.string().required(),
    designation: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().email().required()
}))

export const SavePageProgress_body_requests = joi.object({
    credit_period: joi.string().required(),
    credit_limit: joi.number().required()
})

export const UpdateTimeSpent_params = joi.object({
    step: joi.string().valid(...config.Applications.RegisterBranch.Pages).required()
})

export const UpdateTimeSpent_body = joi.object({
    time_spent: joi.number().integer().min(0).required()
})