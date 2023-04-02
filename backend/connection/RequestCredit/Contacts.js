/*
CREATE TABLE `contacts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `nationality` VARCHAR(255) NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);
*/

export default class Contacts {
    constructor(pool){
        this.pool = pool
    }

    // select Contact by id
    SelectContactById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_contacts WHERE id = ?`,
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

    // select Contacts by application id
    SelectContactsByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT
                title,
                name,
                email,
                phone,
                nationality
                FROM requestcredit_contacts WHERE application_id = ?`,
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

    // select Contacts by application id and contact title
    SelectContactsByApplicationIdAndContactTitle(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_contacts WHERE application_id = ? AND title = ?`,
                [
                    data.application_id,
                    data.title
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

    // select Contact by application id and contact id
    SelectContactByApplicationIdAndContactId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_contacts WHERE application_id = ? AND id = ?`,
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

    // update Contact info by application id and contact id
    UpdateContactByApplicationIdAndContactId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE requestcredit_contacts SET
                title = ?,
                name = ?,
                email = ?,
                phone = ?,
                nationality = ?
                WHERE application_id = ? AND id = ?`,
                [
                    data.title,
                    data.name,
                    data.email,
                    data.phone,
                    data.nationality,
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

    // insert Contact
    InsertContact(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO requestcredit_contacts (application_id, title, name, email, phone, nationality) VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    data.application_id,
                    data.title,
                    data.name,
                    data.email,
                    data.phone,
                    data.nationality
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

    // delete Contacts by application id and title
    DeleteContactsByApplicationIdAndTitle(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `DELETE FROM requestcredit_contacts WHERE application_id = ? AND title = ?`,
                [
                    data.application_id,
                    data.title
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

    // delete Contact by application id
    DeleteContactsByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `DELETE FROM requestcredit_contacts WHERE application_id = ?`,
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