import * as response from '../../utils/Response.js'
import { randomUUID } from 'crypto'
import jwt from 'jsonwebtoken'
import config from '../../config/Config.js'
export async function GenerateToken(req, res, next) {
    const database = req.app.get('database');

    try{
        const account_id = req.body.account_id

        const get_account_action = await database.Account.SelectAccountByAccountId({account_id: account_id})
        
        if (get_account_action.length == 0) {
            return response.fail(res, 'account not found')
        }

        const jwt_token = jwt.sign({account_id: account_id}, config.jwt.secret, {expiresIn: config.jwt.expiresIn})
        
        return response.success(res, {token: jwt_token})
    }
    catch (error) {
        return response.system(res, error)
    }
}

export async function AddAccount(req, res, next) {
    const database = req.app.get('database');
    const account_id = randomUUID()

    try{
        const get_account_action = await database.Account.SelectAccountByAccountId({account_id: account_id})
        
        if (get_account_action.length != 0) {
            return response.fail(res, 'account already exist')
        }

        const add_account_action = await database.Account.InsertAccount({account_id: account_id})
        
        if (add_account_action.affectedRows == 0) {
            return response.fail(res, 'failed to add account')
        }

        return response.success(res, {account_id: account_id})
    }
    catch (error) {
        return response.system(res, error)
    }
}