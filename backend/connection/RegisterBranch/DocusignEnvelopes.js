/*
CREATE TABLE `registerbranch_docusign_envelopes` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `envelope_id` VARCHAR(255) NOT NULL,
    `application_id` VARCHAR(255) NOT NULL,
    `recipient_email` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'created',
    `signing_date` DATETIME NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
)
*/

export default class DocusignEnvelopes {
    constructor(pool){
        this.pool = pool
    }

    // Select Envelope by id
    SelectEnvelopeByEnvelopeId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM registerbranch_docusign_envelopes WHERE envelope_id = ?`,
                [
                    data.envelope_id
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

    // Update Envelope Status
    UpdateEnvelopeStatusAndSigningDate(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE registerbranch_docusign_envelopes SET status = ?, signing_date = ? WHERE envelope_id = ?`,
                [
                    data.status,
                    data.signing_date,
                    data.envelope_id
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

    // Insert Envelope
    InsertEnvelope(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO registerbranch_docusign_envelopes (envelope_id, application_id, recipient_email) VALUES (?, ?, ?)`,
                [
                    data.envelope_id,
                    data.application_id,
                    data.recipient_email
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