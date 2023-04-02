export default class Account {
    constructor(pool){
        this.pool = pool
    }

    // select account by id

    SelectAccountById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM account WHERE id = ?`,
                [
                    data.id
                ],
                (error, results, fields) => {
                    if (error) {
                    reject(error)
                    }else{
                    resolve(results)
                    }
                }
            )
        })
    }

    // select account by account_id

    SelectAccountByAccountId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM account WHERE account_id = ?`,
                [
                    data.account_id
                ],
                (error, results, fields) => {
                    if (error) {
                    reject(error)
                    }else{
                    resolve(results)
                    }
                }
            )
        })
    }

    
    InsertAccount(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO account (account_id) VALUES (?)`,
                [
                    data.account_id
                ],
                (error, results, fields) => {
                    if (error) {
                    reject(error)
                    }else{
                    resolve(results)
                    }
                }
            )
        })
    }
}