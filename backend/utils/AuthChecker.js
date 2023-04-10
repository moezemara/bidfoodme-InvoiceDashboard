import * as response from './Response.js'
import jwt from 'jsonwebtoken'
import config from '../config/Config.js'

export async function basic(req, res, next) {
    const token = req.headers["Authorization"]
    
    if(!token){
        return response.fail(res, 'session expired')
    }


    const resp = jwt.verify(token, config.jwt.secret, (err, decoded) => {
        if(err){
            return -1
        }
        req.account_id = decoded.account_id  
    })

    if(resp == -1){
        return response.fail(res, 'session expired')
    }

    // check if account exist

    const database = req.app.get('database');

    try{
        const get_account_action = await database.Account.SelectAccountByAccountId({account_id: req.account_id})
            
        if (get_account_action.length == 0) {
            return response.fail(res, 'account not found')
        }
    }
    catch (error) {
        return response.system(res, error)
    }
    
    next()
}

export function admin(req, res, next) {
    // check for admin token in header

    const token = req.headers["Admin-Authorization"]

    if(!token){
        return response.fail(res, 'Unauthorized')
    }

    // check if token is the same as the one in config
    if(token != config.admin.token){
        return response.fail(res, 'Unauthorized')
    }

    next()
}
