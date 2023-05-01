import Joi from 'joi'
import joi_date from '@joi/date'
import config from '../../../config/Config.js'

const joi = Joi.extend(joi_date)

export const SavePageProgress_params = joi.object({
    step: joi.string().valid(...config.Applications.RegisterBranch.Pages).required().label('Step')
})

export const SavePageProgress_body_general = joi.object({
    outlet_legal_name: joi.string().required().label('Outlet Legal Name'),
    outlet_trade_name: joi.string().required().label('Outlet Trade Name'),
    outlet_group_name: joi.string().required().label('Outlet Group Name'),
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
    website_url: joi.string().domain().required().label('Website URL')
})

export const SavePageProgress_body_license = joi.object({
    vat_number: joi.string().required().label('VAT Number'),
    license_number: joi.string().required().label('License Number'),
    license_expiration: joi.date().format("DD/MM/YYYY").required().label('License Expiry Date')
})

export const SavePageProgress_body_contacts = joi.array().items(joi.object({
    title: joi.string().required().label('Contact Title'),
    name: joi.string().required().label('Contact Name'),
    phone: joi.number().integer().optional().label('Contact Phone'),
    mobile: joi.number().integer().optional().label('Contact Mobile'),
    email: joi.string().email().optional().label('Contact Email'),
    shareholder_percentage: joi.number().integer().min(0).max(100).optional().label('Shareholder Percentage'),
})).label('Contacts')

export const SavePageProgress_body_signatures = joi.array().min(2).max(2).items(joi.object({
    title: joi.string().required().label('Signaturer Title'),
    name: joi.string().required().label('Signaturer Name'),
    phone: joi.number().integer().optional().label('Signaturer Phone'),
    mobile: joi.number().integer().optional().label('Signaturer Mobile'),
    email: joi.string().email().optional().label('Signaturer Email'),
})).label('Signatures')

export const SavePageProgress_body_uploads = joi.object({
    hasVatCert: joi.string().valid('yes', 'no').required().label('Has VAT Certificate'),
    license: joi.optional().label('License'),
    vat: joi.optional().label('VAT Certificate'),
    owner_pp: joi.optional().label('Owner Passport'),
    owner_visa: joi.optional().label('Owner Visa'),
    owner_eid: joi.optional().label('Owner EID'),
    power_of_attorney: joi.optional().label('Power of Attorney'),
})

export const SavePageProgress_body_requests = joi.object({
    credit_limit: joi.number().required().label('Credit Limit'),
})

export const UpdateTimeSpent_params = joi.object({
    step: joi.string().valid(...config.Applications.RegisterBranch.UiPages).required().label('Step')
})

export const UpdateTimeSpent_body = joi.object({
    time_spent: joi.number().integer().min(0).max(60*60*24).required().label('Time Spent')
})