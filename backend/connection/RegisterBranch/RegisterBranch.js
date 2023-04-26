import Applications from './Applications.js'
import General from './General.js'
import LicenseInfo from './LicenseInfo.js'
import Contacts from './Contacts.js'
import Documents from './Documents.js'
import Requests from './Requests.js'
import ApplicationTime from './ApplicationTime.js'
import DocusignEnvelopes from './DocusignEnvelopes.js'

export default class RegisterBranch {
    constructor(pool){
        this.pool = pool
        this.Applications = new Applications(this.pool)
        this.General = new General(this.pool)
        this.LicenseInfo = new LicenseInfo(this.pool)
        this.Contacts = new Contacts(this.pool)
        this.Documents = new Documents(this.pool)
        this.Requests = new Requests(this.pool)
        this.ApplicationTime = new ApplicationTime(this.pool)
        this.DocusignEnvelopes = new DocusignEnvelopes(this.pool)
    }

}