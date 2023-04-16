export default class DocuSign {
    constructor(pool){
        this.pool = pool
    }

    // get the first non expired token
    SelectAccessToken(){
        return new Promise((resolve, reject) => {
            this.pool.query(
                `SELECT * FROM docusign_sessions WHERE expired = 0 LIMIT 1`,
                (error, results, fields) => {
                    if (error) {
                    reject(error)
                    }else{
                    resolve(results[0])
                    }
                }
            )
        })
    }

    // insert access token
    InsertAccessToken(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `INSERT INTO docusign_sessions (access_token, refresh_token, expires_in, token_type, scope) VALUES (?,?,?,?,?)`,
                [
                    data.access_token,
                    data.refresh_token,
                    data.expires_in,
                    data.token_type,
                    data.scope,
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

    // update token status
    UpdateTokenStatus(data){
        return new Promise((resolve, reject) =>{
            this.pool.query(
                `UPDATE docusign_sessions SET expired = ? WHERE id = ?`,
                [
                    data.expired,
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

    // select last token
    SelectLastExpiredToken(){
        return new Promise((resolve, reject) => {
            this.pool.query(
                `SELECT * FROM docusign_sessions ORDER BY id DESC LIMIT 1`,
                (error, results, fields) => {
                    if (error) {
                    reject(error)
                    }else{
                    resolve(results[0])
                    }
                }
            )
        })
    }
}