import * as response from './response.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export function basic(req, res, next) {
    const token = req.headers["authorization"]
    
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
    
    next()
}

function generateToken(account_id){
    return jwt.sign({account_id: account_id}, config.jwt.secret, {expiresIn: config.jwt.expiresIn})
}