export default class Documents {
    constructor(pool){
        this.pool = pool
    }

    // select documents by id
    SelectDocumentsById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_documents WHERE id = ?`,
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

    // select documents by application id
    SelectDocumentsByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT
                fieldname,
                originalname
                FROM requestcredit_documents WHERE application_id = ?`,
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

    // select documents by application id (full data)
    SelectDocumentsByApplicationIdFullData(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_documents WHERE application_id = ?`,
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

    // select documents by application id and field name
    SelectDocumentsByApplicationIdAndFieldName(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM requestcredit_documents WHERE application_id = ? AND fieldname = ?`,
                [
                    data.application_id,
                    data.fieldname
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

    // insert documents
    InsertDocument(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO requestcredit_documents (application_id, destination, encoding, fieldname, filename, originalname, mimetype, path, size) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    data.application_id,
                    data.destination,
                    data.encoding,
                    data.fieldname,
                    data.filename,
                    data.originalname,
                    data.mimetype,
                    data.path,
                    data.size
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

    // delete documents by application id and field name
    DeleteDocumentsByApplicationIdAndFieldName(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `DELETE FROM requestcredit_documents WHERE application_id = ? AND fieldname = ?`,
                [
                    data.application_id,
                    data.fieldname
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

    // delete documents by application id
    DeleteDocumentsByApplicationId(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `DELETE FROM requestcredit_documents WHERE application_id = ?`,
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