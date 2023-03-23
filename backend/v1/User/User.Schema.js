import joi from 'joi'

export const GenerateToken_body = joi.object({
    account_id: joi.string().required()
})