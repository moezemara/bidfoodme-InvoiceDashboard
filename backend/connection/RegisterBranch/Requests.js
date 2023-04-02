export default class Requests {
    constructor(pool){
        this.pool = pool
    }

    // select requests by id
    SelectRequestById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM registerbranch_requests WHERE id = ?`,
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

    // select requests by application id
    SelectRequestByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT
                credit_limit,
                credit_period
                FROM registerbranch_requests WHERE application_id = ?`,
                [
                    data.application_id
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

    // update requests by application id
    UpdateRequestByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE registerbranch_requests SET
                credit_limit = ?,
                credit_period = ?
                WHERE application_id = ?`,
                [
                    data.credit_limit,
                    data.credit_period,
                    data.application_id
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

    // insert requests
    InsertRequest(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO registerbranch_requests (application_id, credit_limit, credit_period) VALUES (?, ?, ?)`,
                [
                    data.application_id,
                    data.credit_limit,
                    data.credit_period
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