import React, { useState } from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormStepName, FormStepDescription } from './FormComponentsStyles';
import dayjs from 'dayjs';

import { RequestCreditContext } from '../Contexts/RequestCreditContext';

const GeneralInfoComponent = ({ handleOnDataChange }) => {
  const { data, updateData } = React.useContext(RequestCreditContext);

  // state for the whole form
  const [formState, setFormState] = useState({
    first_name: data.general_info.first_name || '',
    last_name: data.general_info.last_name || '',
    country: data.general_info.country || '',
    city: data.general_info.city || '',
    phone: data.general_info.phone || '',
    po_box: data.general_info.po_box || '',
    service_years: data.general_info.service_years || '',
    vat_number: data.general_info.vat_number || '',
    license_expiration: data.general_info.license_expiration || '',
    license_number: data.general_info.license_number || '',
  });

  // function to update form data and call callback
  const handleFormDataChange = (field, value) => {
    
    const updatedFormState = { ...formState, [field]: value };
    // setFormState(updatedFormState);
    updateData('general_info', updatedFormState);
    setFormState(updatedFormState);
    handleOnDataChange({...data, general_info: updatedFormState});
  };

  return (
    <>
    <FormStepName>General Information</FormStepName>
    <FormStepDescription>Let's begin by filling out your general information</FormStepDescription>
    <Grid container spacing={7}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="First Name" variant="outlined" fullWidth
          onChange={(e) => handleFormDataChange('first_name', e.target.value)}
          value={formState.first_name}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
        label="Last Name" variant="outlined" fullWidth
        onChange={(e) => handleFormDataChange('last_name', e.target.value)}
        value={formState.last_name}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
        label="Country" variant="outlined" fullWidth
        onChange={(e) => handleFormDataChange('country', e.target.value)}
        value={formState.country}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
        label="City" variant="outlined" fullWidth
        onChange={(e) => handleFormDataChange('city', e.target.value)}
        value={formState.city}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
        label="Phone Number" variant="outlined" fullWidth
        onChange={(e) => handleFormDataChange('phone', e.target.value)}
        value={formState.phone}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
        label="P.O. Box" variant="outlined" fullWidth
        onChange={(e) => handleFormDataChange('po_box', e.target.value)}
        value={formState.po_box}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
        label="Years in Food Service" variant="outlined" fullWidth
        onChange={(e) => handleFormDataChange('service_years', e.target.value)}
        value={formState.service_years}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
        label="VAT Registration Number" variant="outlined" fullWidth
        onChange={(e) => handleFormDataChange('vat_number', e.target.value)}
        value={formState.vat_number}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="trade-license-number">Trade License Number</InputLabel>
          <OutlinedInput
            id="trade-license-number"
            label="Trade License Number"
            placeholder="1234 1234 1234 1234"
            inputProps={{ maxLength: 19 }}
            endAdornment={<InputAdornment position="end"> </InputAdornment>}
            onChange={(e) => handleFormDataChange('license_number', e.target.value)}
            value={formState.license_number}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Trade License Expiration Date"
          inputVariant="outlined"
          views={['month', 'year']}
          slotProps={{ textField: { fullWidth: true } }}
          onChange={(newValue) => handleFormDataChange('license_expiration', dayjs(newValue).format('YYYY-MM'))}
          dateFormat="yy-mm"
          inputFormat="yy-mm"
          value={formState.license_expiration ? dayjs(data.general_info.license_expiration) : null}
        />
        </LocalizationProvider>
      </Grid>

    </Grid>
    </>
  );
};

export default GeneralInfoComponent;