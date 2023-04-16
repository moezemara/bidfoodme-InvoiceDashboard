import docusign from 'docusign-esign'
import config from '../config/Config.js'
import axios from 'axios'
import fs from 'fs-extra'

import CreditApplicationForm from './documents/CreditApplicationForm.js'

export async function refreshAccessToken(token) {
    let data = {
        grant_type: "refresh_token",
        refresh_token: token.refresh_token
    }

    const Authorization = "Basic " + btoa(config.docusign.integrationKey + ":" + config.docusign.secretKey)


    try{
        let response = await axios.post('https://account-d.docusign.com/oauth/token', data, {
            headers: {
                Authorization: Authorization,
            }
        }) 
    
        if (response.status != 200) {
            return false
        }
        return response.data
    }
    catch (error) {
        return false
    }
    
}

export async function sendEnvelope(args) {
  let dsApiClient = new docusign.ApiClient();
  dsApiClient.setBasePath(config.docusign.basePath);
  dsApiClient.addDefaultHeader("Authorization", "Bearer " + args.accessToken);
  let envelopesApi = new docusign.EnvelopesApi(dsApiClient),
    results = null;

  // Step 1. Make the envelope request body
  let envelope = makeEnvelope(args.envelopeArgs);

  // Step 2. call Envelopes::create API method
  // Exceptions will be caught by the calling function
  results = await envelopesApi.createEnvelope(config.docusign.accountId, {
    envelopeDefinition: envelope,
  });
  
  let envelopeId = results.envelopeId;

  return envelopeId;
};

function makeEnvelope(args) {

  // create the envelope definition
  let env = new docusign.EnvelopeDefinition();
  env.emailSubject = "Please sign this document";

  // add the documents
  let doc1 = new docusign.Document()
  let doc1b64 = Buffer.from(CreditApplicationForm(args.document_data)).toString("base64")

  doc1.documentBase64 = doc1b64;
  doc1.name = "Credit Application Form"; // can be different from actual file name
  doc1.fileExtension = "html"; // Source data format. Signed docs are always pdf.
  doc1.documentId = "1"; // a label used to reference the doc

  // The order in the docs array determines the order in the envelope
  env.documents = [doc1];

  // create a signer recipient to sign the document, identified by name and email
  // We're setting the parameters via the object constructor
  let signer1 = docusign.Signer.constructFromObject({
    email: args.signerEmail,
    name: args.signerName,
    recipientId: "1",
    routingOrder: "1",
  });


  // Create signHere fields (also known as tabs) on the documents,
  // We're using anchor (autoPlace) positioning
  //
  // The DocuSign platform searches throughout your envelope's
  // documents for matching anchor strings. So the
  // signHere2 tab will be used in both document 2 and 3 since they
  // use the same anchor string for their "signer 1" tabs.
  let signHere1 = docusign.SignHere.constructFromObject({
      anchorString: "**signature**",
      anchorYOffset: "10",
      anchorUnits: "pixels",
      anchorXOffset: "20",
    })


  // Tabs are set per recipient / signer
  let signer1Tabs = docusign.Tabs.constructFromObject({
    signHereTabs: [signHere1],
  });
  signer1.tabs = signer1Tabs;

  // Add the recipients to the envelope object
  let recipients = docusign.Recipients.constructFromObject({
    signers: [signer1]
  });
  env.recipients = recipients;

  // Request that the envelope be sent by setting |status| to "sent".
  // To request that the envelope be created as a draft, set to "created"
  env.status = args.status;

  return env;
}