import React, { useState } from 'react';
import {
  Grid,
  TextField,
  InputAdornment
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormStepName, FormStepDescription, CustomInputLabel, InputTitle } from './FormComponentsStyles';
import dayjs from 'dayjs';

import { RegisterBranchContext } from '../Contexts/RegisterBranchContext';

const GeneralInfoComponent = ({ handleOnDataChange }) => {
  const { data, updateData } = React.useContext(RegisterBranchContext);

  // state for the whole form
  const [formState, setFormState] = useState({
    outlet_legal_name: data.general_info.outlet_legal_name || '',
    outlet_trade_name: data.general_info.outlet_trade_name || '',
    outlet_address: data.general_info.outlet_address || '',
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
    handleOnDataChange({ ...data, general_info: updatedFormState });
  };

  return (
    <>
      <FormStepName>General Information</FormStepName>
      <FormStepDescription>Let's begin by filling out your general information</FormStepDescription>
      <Grid container rowSpacing={2} columnSpacing={{ md: 4 }}>
        <Grid item xs={12}>
          <InputTitle>Outlet / Group</InputTitle>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlet_legal_name"
            onChange={(e) => handleFormDataChange('outlet_legal_name', e.target.value)}
            value={formState.outlet_legal_name}
          />
          <CustomInputLabel htmlFor="outlet_legal_name" className='input_label'>
            Legal Name
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlet_trade_name"
            onChange={(e) => handleFormDataChange('outlet_trade_name', e.target.value)}
            value={formState.outlet_trade_name}
          />
          <CustomInputLabel htmlFor="outlet_trade_name">
            Trade Name
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12}>
          <InputTitle>Outlet Invoicing Address</InputTitle>
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
            fullWidth
            id="outlet_address_input"
            onChange={(e) => handleFormDataChange('outlet_address', e.target.value)}
            value={formState.outlet_address}
          />
          <CustomInputLabel htmlFor="outlet_address_input">
            Full address
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="city_input"
            onChange={(e) => handleFormDataChange('country', e.target.value)}
            value={formState.country}
          />
          <CustomInputLabel htmlFor="city_input">
            City
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="country_input"
            onChange={(e) => handleFormDataChange('city', e.target.value)}
            value={formState.city}
          />
          <CustomInputLabel htmlFor="country_input">
            Country
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12}>
          <InputTitle>Trade License</InputTitle>
        </Grid >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="trade-license-number"
            placeholder="1234 1234 1234 1234"
            InputProps={{ maxLength: 19 }}
            endadornment={<InputAdornment position="end"> </InputAdornment>}
            onChange={(e) => handleFormDataChange('license_number', e.target.value)}
            value={formState.license_number}
          />
          <CustomInputLabel htmlFor="trade-license-number">
            Trade license number
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputVariant="outlined"
              views={['month', 'year']}
              placeholder="Example : 10/23"
              slotProps={{ textField: { fullWidth: true } }}
              onChange={(newValue) => handleFormDataChange('license_expiration', dayjs(newValue).format('YYYY-MM'))}
              dateFormat="yy-mm"
              inputFormat="yy-mm"
              value={formState.license_expiration ? dayjs(data.general_info.license_expiration) : null}
            />
            <CustomInputLabel htmlFor="trade-license-number">
              Trade license expiration date
            </CustomInputLabel>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <InputTitle>Phone number</InputTitle>
        </Grid >
        <Grid item xs={6}>
          <InputTitle>P.O. Box</InputTitle>
        </Grid >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={(e) => handleFormDataChange('phone', e.target.value)}
            value={formState.phone}
          />
          <CustomInputLabel htmlFor="">
            &nbsp;
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={(e) => handleFormDataChange('po_box', e.target.value)}
            value={formState.po_box}
          />
          <CustomInputLabel htmlFor="">
            &nbsp;
          </CustomInputLabel>
        </Grid>
        <Grid item xs={6}>
          <InputTitle>Number of years in fund service</InputTitle>
        </Grid>
        <Grid item xs={6}>
          <InputTitle>Vat registration number</InputTitle>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
          onChange={(e) => handleFormDataChange('service_years', e.target.value)}
          value={formState.service_years}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={(e) => handleFormDataChange('vat_number', e.target.value)}
            value={formState.vat_number}
          />
        </Grid>
      </Grid >
    </>
  );
};

export default GeneralInfoComponent;