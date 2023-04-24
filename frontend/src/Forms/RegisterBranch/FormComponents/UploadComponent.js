import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
    Grid,
    FormControlLabel,
    TextField,
    Box,
    Radio,
    RadioGroup,
    Typography
  } from '@mui/material';
import { LabelStyle, UploadLabelStyle, FormStepDescription } from './FormComponentsStyles';
import { RegisterBranchContext } from '../Contexts/RegisterBranchContext';


const fileTypes = ["JPEG", "PNG", "PDF"];

function UploadComponent({ handleOnDataChange }) {
  const UploadLabelClass = UploadLabelStyle();
  const LabelClass = LabelStyle();

  const { data, updateData } = React.useContext(RegisterBranchContext);

  // state for the whole form
  const [formState, setFormState] = useState({
    tradelicensefile: data.upload_info.tradelicensefile || null,
    ownerpassportfile: data.upload_info.ownerpassportfile || null,
    ownervisafile: data.upload_info.ownervisafile || null,
    ownereidfile: data.upload_info.ownereidfile || null,
    vatfile: data.upload_info.vatfile || null,
    hasVatCert: data.upload_info.hasVatCert || "",
    credit_limit: data.upload_info.credit_limit || "",
    confirm_info: data.upload_info.confirm_info || false
  });


  // function to update form data and call callback
  const handleFormDataChange = (field, value) => {
    const updatedFormState = { ...formState, [field]: value };
    // setFormState(updatedFormState);
    updateData('upload_info', updatedFormState);
    setFormState(updatedFormState);
    handleOnDataChange({ ...data, upload_info: updatedFormState });
  };

  
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
        label={formState.ownerelofile ? formState.ownerelofile.name : "Upload File"}
        />
        </Grid>
    </Grid>


    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' , mt: 5 }}>
      <p>Could you confirm if you hold a VAT certification?</p>
      <RadioGroup onChange={e => handleFormDataChange("hasVatCert", e.target.value)} sx={{ flexDirection: 'row' }} value={formState.hasVatCert || ""}>
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
        <>
        <Typography variant="h6" className={UploadLabelClass.label}>VAT Document</Typography>
        <FileUploader
        multiple={false}
        handleChange={e => handleFormDataChange("vatfile", e)}
        name="file"
        types={fileTypes}
        label={formState.vatfile ? formState.vatfile.name : "Upload File"}
        />
        </>
      )}
    </Box>


    <Typography variant="h6" className={LabelClass.label}>Request credit limit</Typography>
    <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
        <TextField
        id="outlined-basic" label="Credit Limit" variant="outlined" fullWidth
        onChange={e => handleFormDataChange("credit_limit", e.target.value)}
        value={formState.credit_limit}
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


    {/*confirm information checkbox*/}

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 5, p: 2, bgcolor: 'grey.100' }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        I/We the undersigned, hereby apply with full responsibility, and confirm that the information shown
        on this form is true and correct. I / We also authorize you to verify information from whatever sources
        you may consider appropriate. I / We acknowledge and agree that this application will be deemed an
        acceptance of your sale terms and conditions, as these will appear on your invoices once they are
        accepted by our organization. I / We hereby declare and undertake to pay all the amounts due from
        us, which may be shown as per your books of accounts on account of our dealings with your company.
        If we fail to pay any amounts due or settle the outstanding invoices, we hereby authorize you to take
        any legal action including taking back your goods from us for the value equivalent to the total
        outstanding dues without any prejudice. Any changes in the information shown overleaf, will be
        immediately communicated to you.
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