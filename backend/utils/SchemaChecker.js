import * as response from './Response.js'

export function checkbody(schema){
  return (req, res, next) => {
    const validate = schema.validate(req.body)
    if (validate.error){
      return response.fail(res, validate.error.details[0].message)
    }
    next()
  }
}

export function checkparams(schema){
  return (req, res, next) => {
    const validate = schema.validate(req.params)
    if (validate.error){
      return response.fail(res, validate.error.details[0].message)
    }
    next()
  }
}

export function direct_check(data, schema){
  if (!data) {return {status: false, "message": "No data provided"}}
  const validate = schema.validate(data)
  if (validate.error){
    return {status: false, message: validate.error.details[0].message}
  }
  return {status: true}
}