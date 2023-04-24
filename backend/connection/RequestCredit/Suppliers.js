/*
CREATE TABLE `suppliers` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `contact` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);
*/

export default class Suppliers {
    constructor(pool){
        this.pool = pool
    }

    // select suppliers by id
    SelectSupplierById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_suppliers WHERE id = ?`,
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

    // select suppliers by application id
    SelectSuppliersByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT
                name,
                contact,
                address,
                phone,
                email                
                FROM requestcredit_suppliers WHERE application_id = ?`,
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

    // select suppliers by application id and supplier id
    SelectSupplierByApplicationIdAndSupplierId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_suppliers WHERE application_id = ? AND id = ?`,
                [
                    data.application_id,
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

    // update suppliers by application id
    UpdateSupplierByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE requestcredit_suppliers SET name = ?, contact = ?, address = ?, phone = ?, email = ? WHERE application_id = ? AND id = ?`,
                [
                    data.name,
                    data.contact,
                    data.address,
                    data.phone,
                    data.email,
                    data.application_id,
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

    // insert suppliers
    InsertSupplier(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO requestcredit_suppliers (application_id, name, contact, address, phone, email) VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    data.application_id,
                    data.name,
                    data.contact,
                    data.address,
                    data.phone,
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

    // delete suppliers by application id
    DeleteSuppliersByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `DELETE FROM requestcredit_suppliers WHERE application_id = ?`,
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