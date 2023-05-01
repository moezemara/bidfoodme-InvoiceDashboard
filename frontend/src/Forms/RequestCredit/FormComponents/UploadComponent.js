import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
    Grid,
    FormControlLabel,
    TextField,
    Box,
    Radio,
    RadioGroup,
    Typography,
    InputAdornment
  } from '@mui/material';
import { LabelStyle, UploadLabelStyle, FormStepDescription, BlockTitle } from './FormComponentsStyles';
import { RequestCreditContext } from '../Contexts/RequestCreditContext';
import DataTable from './DataTable/DataTable';


const fileTypes = ["PDF"];

function UploadComponent({ handleOnDataChange }) {
  const UploadLabelClass = UploadLabelStyle();
  const LabelClass = LabelStyle();

  const { data, updateData } = React.useContext(RequestCreditContext);

  // state for the whole form
  const [formState, setFormState] = useState({
    tradelicensefile: data.upload_info.tradelicensefile || null,
    ownerpassportfile: data.upload_info.ownerpassportfile || null,
    ownervisafile: data.upload_info.ownervisafile || null,
    ownereidfile: data.upload_info.ownereidfile || null,
    powerofattorneyfile: data.upload_info.powerofattorneyfile || null,
    vatfile: data.upload_info.vatfile || null,
    hasVatCert: data.upload_info.hasVatCert || false,
    credit_limit: data.upload_info.credit_limit || '',
    confirm_info: data.upload_info.confirm_info || false,
    authorised_signatures: data.upload_info.authorised_signatures || []
  });



  // function to update form data and call callback
  const handleFormDataChange = (field, value) => {
    const updatedFormState = { ...formState, [field]: value };
    // setFormState(updatedFormState);
    updateData('upload_info', updatedFormState);
    setFormState(updatedFormState);
    handleOnDataChange({ ...data, upload_info: updatedFormState });
  };

  const handleAuthorisedSignaturesChange = (newData) => {
    const convertedArray = []
    newData.forEach((row) => {
      convertedArray.push({
        title: row.Title.data,
        name: row.Name.data,
        phone: row.Phone.data,
        mobile: row.Mobile.data,
        email: row.Email.data
      })
    })

    handleFormDataChange("authorised_signatures", convertedArray)
  }

  const Authorised_Signatures_fields = [
    { field: "Title", headerName: "Title", type: "text", cellWidth: "25%", CellAlign: 'center' },
    { field: "Name", headerName: "Name", type: "text", cellWidth: "25%" },
    { field: "Phone", headerName: "Phone number", type: "text", cellWidth: "25%" },
    { field: "Mobile", headerName: "Mobile number", type: "text", cellWidth: "25%" },
    { field: "Email", headerName: "Email", type: "text", cellWidth: "25%" }
  ];

  let Authorised_Signatures_defaultRows = [
    {
      Title: { data: "", editable: true},
      Name: { data: "", editable: true },
      Phone: { data: "", editable: true },
      Mobile: { data: "", editable: true },
      Email: { data: "", editable: true }
    },
    {
      Title: { data: "", editable: true},
      Name: { data: "", editable: true },
      Phone: { data: "", editable: true },
      Mobile: { data: "", editable: true },
      Email: { data: "", editable: true }
    }
  ]

  if (formState.authorised_signatures.length > 0) {
    // Authorised_Signatures_defaultRows = formState.authorised_signatures
    formState.authorised_signatures.forEach((item, index) => {
      Authorised_Signatures_defaultRows[index].Title.data = item.title
      Authorised_Signatures_defaultRows[index].Name.data = item.name
      Authorised_Signatures_defaultRows[index].Phone.data = item.phone
      Authorised_Signatures_defaultRows[index].Mobile.data = item.mobile
      Authorised_Signatures_defaultRows[index].Email.data = item.email
    })
  }

  return (
    <div>
    <FormStepDescription>This is the final step - upload necessary files and provide your requests</FormStepDescription>
    {/* <Typography variant="h6" className={LabelClass.label}>Banking Details</Typography> */}
    <Grid container spacing={7}>
      <Grid item xs={12} sm={6}>
      <Typography variant="h6" className={UploadLabelClass.label}>Trade License</Typography>
      <FileUploader
        multiple={false}
        handleChange={e => handleFormDataChange("tradelicensefile", e)}
        name="file"
        types={fileTypes}
        label={formState.tradelicensefile ? formState.tradelicensefile.name : "Upload File"}
      />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" className={UploadLabelClass.label}>Owner/Partner Passport</Typography>
        <FileUploader
        multiple={false}
        handleChange={e => handleFormDataChange("ownerpassportfile", e)}
        name="file"
        types={fileTypes}
        label={formState.ownerpassportfile ? formState.ownerpassportfile.name : "Upload File"}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" className={UploadLabelClass.label}>Owner/Partner Visa</Typography>
        <FileUploader
            multiple={false}
            handleChange={e => handleFormDataChange("ownervisafile", e)}
            name="file"
            types={fileTypes}
            label={formState.ownervisafile ? formState.ownervisafile.name : "Upload File"}
        />
      </Grid>
      <Grid item xs={12} sm={6}>     
        <Typography variant="h6" className={UploadLabelClass.label}>Owner/Partner EID</Typography>   
        <FileUploader
        multiple={false}
        handleChange={e => handleFormDataChange("ownereidfile", e)}
        name="file"
        types={fileTypes}
        label={formState.ownereidfile ? formState.ownereidfile.name : "Upload File"}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" className={UploadLabelClass.label}>Power of attorney</Typography>
        <FileUploader
        multiple={false}
        handleChange={e => handleFormDataChange("powerofattorneyfile", e)}
        name="file"
        types={fileTypes}
        label={formState.powerofattorneyfile ? formState.powerofattorneyfile.name : "Upload File"}
        />
      </Grid>
    </Grid>

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' , mt: 5 }}>
      <p>Could you confirm if you hold a VAT certification?</p>
      <RadioGroup onChange={e => handleFormDataChange("hasVatCert", e.target.value)} sx={{ flexDirection: 'row' }} value={formState.hasVatCert || false}>
        <FormControlLabel
          control={<Radio />}
          value="yes"
          label="Yes"
        />
        <FormControlLabel
          control={<Radio />}
          value="no"
          label="No"
        />
      </RadioGroup>
      {formState.hasVatCert === 'yes' && (
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={UploadLabelClass.label}>VAT Document</Typography>
            <FileUploader
            multiple={false}
            handleChange={e => handleFormDataChange("vatfile", e)}
            name="file"
            types={fileTypes}
            label={formState.vatfile ? formState.vatfile.name : "Upload File"}
            />
          </Grid>
        </Grid>
      )}
    </Box>

    <Typography variant="h6" className={LabelClass.label}>Request credit limit</Typography>
    <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
        <TextField
        id="outlined-basic" label="Credit Limit" variant="outlined" fullWidth
        onChange={e => handleFormDataChange("credit_limit", e.target.value)}
        value={formState.credit_limit}
        InputProps={{
          endAdornment: <InputAdornment position="end">AED</InputAdornment>
        }}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        id="outlined-basic" label="Credit Period" variant="outlined" fullWidth
        disabled        
        value="30 days"
        />
        </Grid>
    </Grid>

    <BlockTitle>Authorised Signaturers</BlockTitle>
    <DataTable onDataTableChange={handleAuthorisedSignaturesChange} columns={Authorised_Signatures_fields} defaultRows={Authorised_Signatures_defaultRows} unique_key={'Authorised_Signatures'} maxRows={2} preventDelete={true}/>
    {/*confirm information checkbox*/}

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 5, p: 2, bgcolor: 'grey.100' }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · All invoices are to be paid as per the approved Credit terms.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · Claims arising from invoices must be made within 7 working days.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · We agree to settle all payment on/before the due dates.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · By submitting this request, you authorise Horeca Trade LLC to make inquires into the banking and business/trade references that you have supplied.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · Horeca Trade LLC must be notified immediately in case of any change in the management/authorization/authorized signatories and any changes to the legal entity.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · Any change in legal status/ownership/Management of the Company & Address change shall be informed to Horeca Trade LLC
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · We accept all liability of all supplies made by Horeca Trade LLC against purchase orders/delivery orders.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · Horeca Trade LLC reserves the right to suspend supply of material/amend the credit facility granted without notice, according to the account performance.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      · Interest @ 12% p.a. will be charged on delayed payments.
      </Typography>
      <RadioGroup onChange={e => handleFormDataChange("confirm_info", e.target.value)} sx={{ flexDirection: 'row' }} value={formState.confirm_info || ""}>
        <FormControlLabel
          control={<Radio />}
          value="yes"
          label="Agree"
        />
        <FormControlLabel
          control={<Radio />}
          value="no"
          label="Disagree"
        />
      </RadioGroup>
    </Box>
    </div>
  );
}

export default UploadComponent;