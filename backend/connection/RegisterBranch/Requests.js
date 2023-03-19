export default class Requests {
    constructor(pool){
        this.pool = pool
    }

    // select requests by id
    SelectRequestById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requests WHERE id = ?`,
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
                `SELECT * FROM requests WHERE application_id = ?`,
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
                `UPDATE requests SET
                credit_period = ?,
                credit_limit = ?
                WHERE application_id = ?`,
                [
                    data.credit_period,
                    data.credit_limit,
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
                `INSERT INTO requests (application_id, credit_period, credit_limit) VALUES (?, ?, ?)`,
                [
                    data.application_id,
                    data.credit_period,
                    data.credit_limit
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