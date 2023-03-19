/*
CREATE TABLE `license_info` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `license_number` VARCHAR(255) NOT NULL,
    `vat_number` VARCHAR(255) NOT NULL,
    `license_expiration` DATE NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);

*/

export default class LicenseInfo {
    constructor(pool){
        this.pool = pool
    }

    // select license info by id
    SelectLicenseInfoById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM license_info WHERE id = ?`,
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

    // select license info by application id
    SelectLicenseInfoByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM license_info WHERE application_id = ?`,
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

    // update license info by application id
    UpdateLicenseInfoByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE license_info
                SET
                    license_number = ?,
                    vat_number = ?,
                    license_expiration = ?
                WHERE application_id = ?`,
                [
                    data.license_number,
                    data.vat_number,
                    data.license_expiration,
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

    // insert license info
    InsertLicenseInfo(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO license_info
                (application_id, license_number, vat_number, license_expiration)
                VALUES (?,?,?,?)`,
                [
                    data.application_id,
                    data.license_number,
                    data.vat_number,
                    data.license_expiration
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