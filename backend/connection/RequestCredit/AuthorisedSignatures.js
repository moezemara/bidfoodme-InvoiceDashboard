/*
CREATE TABLE `requestcredit_authorised_signatures` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);
*/


export default class AuthorisedSignatures {
    constructor(pool){
        this.pool = pool
    }
    

    // select authorised signatures by id
    SelectAuthorisedSignaturesById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_authorised_signatures WHERE id = ?`,
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

    // select authorised signatures by application id

    SelectAuthorisedSignaturesByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT
                title,
                name,
                phone,
                mobile,
                email
                FROM requestcredit_authorised_signatures WHERE application_id = ?`,
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

    // insert authorised signatures
    InsertAuthorisedSignatures(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO requestcredit_authorised_signatures
                (
                    application_id,
                    title,
                    name,
                    phone,
                    mobile,
                    email
                )
                VALUES (?,?,?,?,?,?)`,
                [
                    data.application_id,
                    data.title,
                    data.name,
                    data.phone,
                    data.mobile,
                    data.email
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

    // update authorised signatures
    UpdateAuthorisedSignatures(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE requestcredit_authorised_signatures SET
                title = ?,
                name = ?,
                phone = ?,
                mobile = ?,
                email = ?
                WHERE id = ?`,
                [
                    data.title,
                    data.name,
                    data.phone,
                    data.mobile,
                    data.email,
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
    
    // delete signatures by application id
    DeleteSignaturesByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `DELETE FROM requestcredit_authorised_signatures WHERE application_id = ?`,
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
