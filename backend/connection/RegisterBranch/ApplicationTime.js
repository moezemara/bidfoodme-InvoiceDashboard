export default class ApplicationTime {
    constructor(pool){
        this.pool = pool
    }

    // select application time by id
    SelectApplicationTimeById(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM application_time WHERE id = ?`,
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

    // select application time by application id
    SelectApplicationTimeByApplicationId(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM application_time WHERE application_id = ?`,
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
    
    // get time spent on specific step
    GetTimeSpentOnStep(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT ? FROM application_time WHERE application_id = ?`,
                [
                    data.step,
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

    // update time spent on specific step by application id
    UpdateTimeSpentOnStepByApplicationId(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE application_time SET ?? = ? WHERE application_id = ?`,
                [
                    data.step,
                    data.time_spent,
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

    // update submission date by application id to current date
    UpdateSubmissionDateByApplicationId(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE application_time SET submission_date = NOW() WHERE application_id = ?`,
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

}
