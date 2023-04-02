/*
CREATE TABLE `application_time` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `general` INT NULL,
    `contact` INT NULL,
    `references` INT NULL,
    `uploads` INT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `submission_date` DATETIME NULL,
    `total_time` INT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);
*/

export default class ApplicationTime {
    constructor(pool){
        this.pool = pool
    }

    // select application time by id
    SelectApplicationTimeById(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM registerbranch_application_time WHERE id = ?`,
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
                `SELECT * FROM registerbranch_application_time WHERE application_id = ?`,
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
                `SELECT ? FROM registerbranch_application_time WHERE application_id = ?`,
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
                `UPDATE registerbranch_application_time SET ?? = ? WHERE application_id = ?`,
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
                `UPDATE registerbranch_application_time SET submission_date = NOW() WHERE application_id = ?`,
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
