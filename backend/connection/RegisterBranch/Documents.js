export default class Documents {
    constructor(pool){
        this.pool = pool
    }

    // select documents by id
    SelectDocumentsById(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM registerbranch_documents WHERE id = ?`,
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
                FROM registerbranch_documents WHERE application_id = ?`,
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

    // select documents by application id and document type
    SelectDocumentsByApplicationIdAndDocumentType(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `SELECT * FROM registerbranch_documents WHERE application_id = ? AND fieldname = ?`,
                [
                    data.application_id,
                    data.document_type
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
                `INSERT INTO registerbranch_documents (application_id, destination, encoding, fieldname, filename, originalname, mimetype, path, size) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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

    // delete documents by application id and document number
    DeleteDocumentsByApplicationIdAndDocumentType(data) {
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `DELETE FROM registerbranch_documents WHERE application_id = ? AND document_type = ?`,
                [
                    data.application_id,
                    data.document_type
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
                `DELETE FROM registerbranch_documents WHERE application_id = ?`,
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