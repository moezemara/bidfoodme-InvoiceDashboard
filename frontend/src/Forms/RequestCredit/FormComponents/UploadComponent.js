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
import { LabelStyle, UploadLabelStyle, FormStepName, FormStepDescription } from './FormComponentsStyles';
import { RequestCreditContext } from '../Contexts/RequestCreditContext';


const fileTypes = ["JPEG", "PNG", "PDF"];

function UploadComponent({ handleOnDataChange }) {
  const UploadLabelClass = UploadLabelStyle();
  const LabelClass = LabelStyle();

  const { data, updateData } = React.useContext(RequestCreditContext);

  // state for the whole form
  const [formState, setFormState] = useState({
    tradelicensefile: data.upload_info.tradelicensefile || null,
    ownerpassportfile: data.upload_info.ownerpassportfile || null,
    ownervisafile: data.upload_info.ownervisafile || null,
    ownerelofile: data.upload_info.ownerelofile || null,
    vatfile: data.upload_info.vatfile || null,
    hasVatCert: data.upload_info.hasVatCert || "",
    credit_limit: data.upload_info.credit_limit || "",
    credit_period: data.upload_info.credit_period || "",
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
    <FormStepName>Upload Files</FormStepName>
    <FormStepDescription>This is the final step - upload necessary files and provide your requests</FormStepDescription>
    <Typography variant="h6" className={LabelClass.label}>Banking Details</Typography>
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
        <Typography variant="h6" className={UploadLabelClass.label}>Owner Passport</Typography>
        <FileUploader
        multiple={false}
        handleChange={e => handleFormDataChange("ownerpassportfile", e)}
        name="file"
        types={fileTypes}
        label={formState.ownerpassportfile ? formState.ownerpassportfile.name : "Upload File"}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" className={UploadLabelClass.label}>Owner Visa</Typography>
        <FileUploader
            multiple={false}
            handleChange={e => handleFormDataChange("ownervisafile", e)}
            name="file"
            types={fileTypes}
            label={formState.ownervisafile ? formState.ownervisafile.name : "Upload File"}
        />
      </Grid>
      <Grid item xs={12} sm={6}>     
        <Typography variant="h6" className={UploadLabelClass.label}>Owner Elo</Typography>   
        <FileUploader
        multiple={false}
        handleChange={e => handleFormDataChange("ownerelofile", e)}
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


    <Typography variant="h6" className={LabelClass.label}>Specify your request</Typography>
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
        onChange={e => handleFormDataChange("credit_period", e.target.value)}
        value={formState.credit_period}
        />
        </Grid>
    </Grid>

    
    </div>

  );
}

export default UploadComponent;