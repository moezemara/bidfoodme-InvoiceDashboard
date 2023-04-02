export default class Applications {
    constructor(pool){
        this.pool = pool
    }

    // insert application
    InsertApplication(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
              `INSERT INTO requestcredit_applications (account_id, application_id) VALUES (?, ?)`,
              [
                data.account_id,
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

    // update status
    UpdateStatus(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE requestcredit_applications SET status = ? WHERE application_id = ?`,
                [
                    data.status,
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

    // select application by id
    SelectApplicationById(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_applications WHERE id = ?`,
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
    
    // select application by account id
    SelectApplicationByAccountId(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_applications WHERE account_id = ?`,
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

    // select application by account id and status
    SelectApplicationByAccountIdAndStatus(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_applications WHERE account_id = ? AND status = ?`,
                [
                    data.account_id,
                    data.status
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

    // update application status by application id
    UpdateApplicationStatusByApplicationId(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE requestcredit_applications SET status = ? WHERE application_id = ?`,
                [
                    data.status,
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

}
