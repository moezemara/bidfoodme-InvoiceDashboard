import docusign from 'docusign-esign'
import config from '../config/Config.js'
import axios from 'axios'
import fs from 'fs-extra'
import puppeteer from 'puppeteer'

import CreditApplicationForm from './documents/CreditApplicationForm.js'
import CustomerOutletInformationSheet from './documents/CustomerOutletInformationSheet.js'

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
  let envelope = await makeEnvelope(args.envelopeArgs);

  // Step 2. call Envelopes::create API method
  // Exceptions will be caught by the calling function
  results = await envelopesApi.createEnvelope(config.docusign.accountId, {
    envelopeDefinition: envelope,
  });
  
  let envelopeId = results.envelopeId;

  return envelopeId;
};

async function makeEnvelope(args) {

  // create the envelope definition
  let env = new docusign.EnvelopeDefinition();
  env.emailSubject = "Please sign this document";

  // add the documents
  let doc1 = new docusign.Document()

  let doc1_html = ''
  if (args.document_data.document_type == 'CustomerOutletInformationSheet') {
    doc1_html = CustomerOutletInformationSheet(args.document_data)
    doc1.name = "Customer Outlet Information Sheet";
  }
  else if (args.document_data.document_type == 'CreditApplicationForm') {
    doc1_html = CreditApplicationForm(args.document_data)
    doc1.name = "Credit Application Form";
  }else{
    return false
  }


  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
 })

  const page = await browser.newPage();
  await page.setContent(doc1_html);
  const pdf = await page.pdf({ format: 'A4', printBackground: true });
  await browser.close();

  doc1.documentBase64 = pdf.toString("base64");
  doc1.fileExtension = "pdf"; // Source data format. Signed docs are always pdf.
  doc1.documentId = "1"; // a label used to reference the doc

  // The order in the docs array determines the order in the envelope
  env.documents = [doc1];

  // create a signer recipient to sign the document, identified by name and email
  // We're setting the parameters via the object constructor
  let signer1 = docusign.Signer.constructFromObject({
    email: args.document_data.authorised_signatures[0].email,
    name: args.document_data.authorised_signatures[0].name,
    recipientId: "1",
    routingOrder: "1",
  });

  let signer2 = docusign.Signer.constructFromObject({
    email: args.document_data.authorised_signatures[1].email,
    name: args.document_data.authorised_signatures[1].name,
    recipientId: "2",
    routingOrder: "2",
  });



  // Create signHere fields (also known as tabs) on the documents,
  // We're using anchor (autoPlace) positioning
  //
  // The DocuSign platform searches throughout your envelope's
  // documents for matching anchor strings. So the
  // signHere2 tab will be used in both document 2 and 3 since they
  // use the same anchor string for their "signer 1" tabs.
  let signHere1 = docusign.SignHere.constructFromObject({
      anchorString: "**signature_1**",
      anchorYOffset: "10",
      anchorUnits: "pixels",
      anchorXOffset: "20",
    })

  let signHere2 = docusign.SignHere.constructFromObject({
    anchorString: "**signature_2**",
    anchorYOffset: "10",
    anchorUnits: "pixels",
    anchorXOffset: "20",
  })


  // Tabs are set per recipient / signer
  let signer1Tabs = docusign.Tabs.constructFromObject({
    signHereTabs: [signHere1],
  });
  signer1.tabs = signer1Tabs;

  let signer2Tabs = docusign.Tabs.constructFromObject({
    signHereTabs: [signHere2],
  });
  signer2.tabs = signer2Tabs;

  // Add the recipients to the envelope object
  let recipients = docusign.Recipients.constructFromObject({
    signers: [signer1, signer2]
  });
  env.recipients = recipients;

  // Request that the envelope be sent by setting |status| to "sent".
  // To request that the envelope be created as a draft, set to "created"
  env.status = args.status;

  return env;
}