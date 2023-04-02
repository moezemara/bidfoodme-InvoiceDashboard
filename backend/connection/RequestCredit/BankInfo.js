/*
CREATE TABLE `bank_info` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `bank_name` VARCHAR(255) NOT NULL,
    `bank_city` VARCHAR(255) NOT NULL,
    `bank_account_number` VARCHAR(255) NOT NULL,
    `bank_iban` VARCHAR(255) NOT NULL,
    `bank_swift` VARCHAR(255) NOT NULL,
    `bank_account_type` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);
*/

export default class BankInfo {
    constructor(pool){
        this.pool = pool
    }

    // select bank info by id
    SelectBankInfoById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_bank_info WHERE id = ?`,
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

    // select bank info by application id
    SelectBankInfoByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT
                bank_name,
                bank_city,
                bank_account_number,
                bank_iban,
                bank_swift,
                bank_account_type                
                FROM requestcredit_bank_info WHERE application_id = ?`,
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

    // update bank info by application id
    UpdateBankInfoByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE requestcredit_bank_info SET bank_name = ?, bank_city = ?, bank_account_number = ?, bank_iban = ?, bank_swift = ?, bank_account_type = ? WHERE application_id = ?`,
                [
                    data.bank_name,
                    data.bank_city,
                    data.bank_account_number,
                    data.bank_iban,
                    data.bank_swift,
                    data.bank_account_type,
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

    // insert bank info
    InsertBankInfo(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO requestcredit_bank_info (application_id, bank_name, bank_city, bank_account_number, bank_iban, bank_swift, bank_account_type) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [
                    data.application_id,
                    data.bank_name,
                    data.bank_city,
                    data.bank_account_number,
                    data.bank_iban,
                    data.bank_swift,
                    data.bank_account_type
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