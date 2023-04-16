/*
CREATE TABLE `general` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `po_box` VARCHAR(255) NOT NULL,
    `service_years` INT NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);
*/


export default class General {
    constructor(pool){
        this.pool = pool
    }

    // select general info by id
    SelectGeneralInfoById(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_general WHERE id = ?`,
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
    
    // select general info by application id
    SelectGeneralInfoByApplicationId(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT
                outlet_legal_name,
                outlet_trade_name,
                outlet_address,
                country,
                city,
                phone,
                po_box,
                service_years
                FROM requestcredit_general WHERE application_id = ?`,
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

    // update general info by application id
    UpdateGeneralInfoByApplicationId(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE requestcredit_general SET outlet_legal_name = ?, outlet_trade_name = ?, outlet_address ,country = ?, city = ?, phone = ?, po_box = ?, service_years = ? WHERE application_id = ?`,
                [
                    data.outlet_legal_name,
                    data.outlet_trade_name,
                    data.outlet_address,
                    data.country,
                    data.city,
                    data.phone,
                    data.po_box,
                    data.service_years,
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

    // insert general info
    InsertGeneralInfo(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO requestcredit_general (application_id, outlet_legal_name, outlet_trade_name, outlet_address, country, city, phone, po_box, service_years) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    data.application_id,
                    data.outlet_legal_name,
                    data.outlet_trade_name,
                    data.outlet_address,
                    data.country,
                    data.city,
                    data.phone,
                    data.po_box,
                    data.service_years
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