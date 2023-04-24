/*
CREATE TABLE `general` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `outlet_legal_name` VARCHAR(255) NOT NULL,
    `outlet_trade_name` VARCHAR(255) NOT NULL,
    `outlet_group_name` VARCHAR(255) NOT NULL,
    `billing_outlet_address` VARCHAR(255) NOT NULL,
    `billing_country` VARCHAR(255) NOT NULL,
    `billing_city` VARCHAR(255) NOT NULL,
    `billing_phone` VARCHAR(255) NOT NULL,
    `billing_po_box` VARCHAR(255) NOT NULL,
    `delivery_outlet_address` VARCHAR(255) NOT NULL,
    `delivery_country` VARCHAR(255) NOT NULL,
    `delivery_city` VARCHAR(255) NOT NULL,
    `delivery_phone` VARCHAR(255) NOT NULL,
    `delivery_po_box` VARCHAR(255) NOT NULL,
    `website_url` VARCHAR(255) NOT NULL,
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
                `SELECT * FROM registerbranch_general WHERE id = ?`,
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
                outlet_group_name,
                billing_outlet_address,
                billing_country,
                billing_city,
                billing_phone,
                billing_po_box,
                delivery_outlet_address,
                delivery_country,
                delivery_city,
                delivery_phone,
                delivery_po_box,
                website_url,
                service_years
                FROM registerbranch_general WHERE application_id = ?`,
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
                `UPDATE registerbranch_general SET
                outlet_legal_name = ?,
                outlet_trade_name = ?,
                outlet_group_name = ?,
                billing_outlet_address = ?,
                billing_country = ?,
                billing_city = ?,
                billing_phone = ?,
                billing_po_box = ?,
                delivery_outlet_address = ?,
                delivery_country = ?,
                delivery_city = ?,
                delivery_phone = ?,
                delivery_po_box = ?,
                website_url = ?,
                service_years = ?
                WHERE application_id = ?`,
                [
                    data.outlet_legal_name,
                    data.outlet_trade_name,
                    data.outlet_group_name,
                    data.billing_outlet_address,
                    data.billing_country,
                    data.billing_city,
                    data.billing_phone,
                    data.billing_po_box,
                    data.delivery_outlet_address,
                    data.delivery_country,
                    data.delivery_city,
                    data.delivery_phone,
                    data.delivery_po_box,
                    data.website_url,
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
                `INSERT INTO registerbranch_general (
                    application_id,
                    outlet_legal_name,
                    outlet_trade_name,
                    outlet_group_name,
                    billing_outlet_address,
                    billing_country,
                    billing_city,
                    billing_phone,
                    billing_po_box,
                    delivery_outlet_address,
                    delivery_country,
                    delivery_city,
                    delivery_phone,
                    delivery_po_box,
                    website_url,
                    service_years
                )
                VALUES (
                    ?, ?, ? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?, ?
                )`,
                [
                    data.application_id,
                    data.outlet_legal_name,
                    data.outlet_trade_name,
                    data.outlet_group_name,
                    data.billing_outlet_address,
                    data.billing_country,
                    data.billing_city,
                    data.billing_phone,
                    data.billing_po_box,
                    data.delivery_outlet_address,
                    data.delivery_country,
                    data.delivery_city,
                    data.delivery_phone,
                    data.delivery_po_box,
                    data.website_url,
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