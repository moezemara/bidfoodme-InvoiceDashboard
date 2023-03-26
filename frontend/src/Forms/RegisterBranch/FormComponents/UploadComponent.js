import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
    Grid,
    FormControlLabel,
    Checkbox,
    TextField,
    Box,
    Radio,
    RadioGroup,
    Typography
  } from '@mui/material';
import { LabelStyle, UploadLabelStyle, FormStepName, FormStepDescription } from './FormComponentsStyles';

const fileTypes = ["JPEG", "PNG", "PDF"];

function UploadComponent() {
  const UploadLabelClass = UploadLabelStyle();
  const LabelClass = LabelStyle();
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const [hasVatCert, setHasVatCert] = useState(false);
  const [vatNumber, setVatNumber] = useState('');

  const handleRadioChange = (event) => {
    setHasVatCert(event.target.value);
    setVatNumber('');
  };

  const handleVatNumberChange = (event) => {
    setVatNumber(event.target.value);
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
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" className={UploadLabelClass.label}>Owner Passport</Typography>
        <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" className={UploadLabelClass.label}>Owner Visa</Typography>
        <FileUploader
            multiple={false}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
        />
      </Grid>
      <Grid item xs={12} sm={6}>     
        <Typography variant="h6" className={UploadLabelClass.label}>Owner Elo</Typography>   
        <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        />
        </Grid>
    </Grid>


    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' , mt: 5 }}>
      <p>Could you confirm if you hold a VAT certification?</p>
      <RadioGroup value={hasVatCert} onChange={handleRadioChange} sx={{ flexDirection: 'row' }}>
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
      {hasVatCert === 'yes' && (
        <>
        <Typography variant="h6" className={UploadLabelClass.label}>VAT Document</Typography>
        <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        />
        </>
      )}
    </Box>


    <Typography variant="h6" className={LabelClass.label}>Specify your request</Typography>
    <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
        <TextField id="outlined-basic" label="Credit Limit" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField id="outlined-basic" label="Credit Period" variant="outlined" fullWidth />
        </Grid>
    </Grid>

    
    </div>

  );
}

export default UploadComponent;