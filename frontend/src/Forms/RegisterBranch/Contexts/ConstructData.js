
function ConstructContact(contacts){
    const ownerContacts = []
    const departmentContacts = []
    
    if (contacts !== undefined && contacts.length > 0) {
        contacts.forEach((contact) => {
            if((contact.title === "Owner" || contact.title === "Partner" || contact.title === "Manager" || contact.title === "Authorized Signatory")) {
                ownerContacts.push(contact)
            } else {
                departmentContacts.push(contact)
            }
        });
    }

    return {
        Owner_Contact: ownerContacts,
        Department_Contact: departmentContacts
    }

}

function ConstructUploads(uploads){
    const upload_info = {
        tradelicensefile: null,
        ownerpassportfile: null,
        ownervisafile: null,
        ownereidfile: null,
        powerofattorneyfile: null,
        vatfile: null,
        hasVatCert: 'no'
    }

    if (uploads !== []) {
        uploads.forEach((upload) => {
            switch (upload.fieldname){
                case 'license':
                    upload_info.tradelicensefile = {}
                    upload_info.tradelicensefile.name = upload.originalname
                    break
                case 'vat':
                    upload_info.vatfile = {}
                    upload_info.vatfile.name = upload.originalname
                    upload_info.hasVatCert = 'yes'
                    break
                case 'owner_pp':
                    upload_info.ownerpassportfile = {}
                    upload_info.ownerpassportfile.name = upload.originalname
                    break
                case 'owner_visa':
                    upload_info.ownervisafile = {}
                    upload_info.ownervisafile.name = upload.originalname
                    break
                case 'owner_eid':
                    upload_info.ownereidfile = {}
                    upload_info.ownereidfile.name = upload.originalname
                    break
                case 'power_of_attorney':
                    upload_info.powerofattorneyfile = {}
                    upload_info.powerofattorneyfile.name = upload.originalname
                    break
                default:
                    break
            }
        });
    }

    return upload_info
}

export default function ConstructData(data){
    const general_info = {
        ...data.general_info,
        ...data.license_info
    }

    const contacts_info = ConstructContact(data.contacts_info)

    const references_info = {
        ...data.bank_info,
        supplier_information: data.suppliers_info
    }

    const upload_info = {
        ...ConstructUploads(data.documents_info),
        ...data.requests_info
    }

    return {
        general_info: general_info,
        contacts_info: contacts_info,
        references_info: references_info,
        upload_info: upload_info
    }
}