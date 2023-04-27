import React, { useState } from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormStepName, FormStepDescription, CustomInputLabel, InputTitle } from './FormComponentsStyles';
import dayjs from 'dayjs';

import { RequestCreditContext } from '../Contexts/RequestCreditContext';
import Countries from '../utils/Countries';

const GeneralInfoComponent = ({ handleOnDataChange }) => {
  const { data, updateData } = React.useContext(RequestCreditContext);

  // state for the whole form
  const [formState, setFormState] = useState({
    outlet_legal_name: data.general_info.outlet_legal_name || '',
    outlet_trade_name: data.general_info.outlet_trade_name || '',
    billing_outlet_address: data.general_info.billing_outlet_address || '',
    billing_country: data.general_info.billing_country || '',
    billing_city: data.general_info.billing_city || '',
    billing_phone: data.general_info.billing_phone || '',
    billing_po_box: data.general_info.billing_po_box || '',
    delivery_outlet_address: data.general_info.delivery_outlet_address || '',
    delivery_country: data.general_info.delivery_country || '',
    delivery_city: data.general_info.delivery_city || '',
    delivery_phone: data.general_info.delivery_phone || '',
    delivery_po_box: data.general_info.delivery_po_box || '',
    service_years: data.general_info.service_years || '',
    vat_number: data.general_info.vat_number || '',
    license_expiration: data.general_info.license_expiration || '',
    license_number: data.general_info.license_number || '',
    website_url: data.general_info.website_url || '',
    use_same_billing_address: data.general_info.use_same_billing_address || false

  });

  // convert conuntries to list of names
  const countries = Countries.map((country) => country.name);

  // function to update form data and call callback
  const handleFormDataChange = (field, value) => {
    const updatedFormState = { ...formState, [field]: value };
    // setFormState(updatedFormState);
    updateData('general_info', updatedFormState);
    setFormState(updatedFormState);
    handleOnDataChange({ ...data, general_info: updatedFormState });
  };

  return (
    <section className='general_sec'>
      <FormStepName>General Information</FormStepName>
      <FormStepDescription>Let's begin by filling out your general information</FormStepDescription>
      <Grid container rowSpacing={2} columnSpacing={{ md: 4 }}>
        <Grid item xs={12}>
          <InputTitle>Outlet</InputTitle>
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
          <InputTitle>Outlet Billing Address</InputTitle>
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
            fullWidth
            id="billing_outlet_address_input"
            onChange={(e) => handleFormDataChange('billing_outlet_address', e.target.value)}
            value={formState.billing_outlet_address}
          />
          <CustomInputLabel htmlFor="billing_outlet_address_input">
            Full address
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            id="billing_country_input"
            onChange={(e) => handleFormDataChange('billing_country', e.target.value)}
            value={formState.billing_country}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          <CustomInputLabel htmlFor="billing_country_input">
            Country
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="billing_city_input"
            onChange={(e) => handleFormDataChange('billing_city', e.target.value)}
            value={formState.billing_city}
          />
          <CustomInputLabel htmlFor="billing_city_input">
            City
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="billing_phone_input"
            onChange={(e) => handleFormDataChange('billing_phone', e.target.value)}
            value={formState.billing_phone}
          />
          <CustomInputLabel htmlFor="billing_phone_input">
            Phone number
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="billing_po_box"
            onChange={(e) => handleFormDataChange('billing_po_box', e.target.value)}
            value={formState.billing_po_box}
          />
          <CustomInputLabel htmlFor="billing_po_box">
            P.O. Box
          </CustomInputLabel>
        </Grid>

        <Grid item xs={12}>
          <InputTitle>Outlet Delivery Address</InputTitle>
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
            control={
              <Checkbox
                checked={formState.use_same_billing_address}
                onChange={(e) => handleFormDataChange('use_same_billing_address', e.target.checked)}
                name="use_same_billing_address"
                color="primary"
              />
            }
            label="Use same as billing address"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
            fullWidth
            id="delivery_outlet_address_input"
            onChange={(e) => handleFormDataChange('delivery_outlet_address', e.target.value)}
            value={formState.use_same_billing_address ? formState.billing_outlet_address : formState.delivery_outlet_address}
            disabled={formState.use_same_billing_address}
          />
          <CustomInputLabel htmlFor="delivery_outlet_address_input">
            Full address
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            id="delivery_country_input"
            onChange={(e) => handleFormDataChange('delivery_country', e.target.value)}
            value={formState.use_same_billing_address ? formState.billing_country : formState.delivery_country}
            disabled={formState.use_same_billing_address}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          <CustomInputLabel htmlFor="delivery_country_input">
            Country
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="delivery_city_input"
            onChange={(e) => handleFormDataChange('delivery_city', e.target.value)}
            value={formState.use_same_billing_address ? formState.billing_city : formState.delivery_city}
            disabled={formState.use_same_billing_address}
          />
          <CustomInputLabel htmlFor="delivery_city_input">
            City
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="delivery_phone_input"
            onChange={(e) => handleFormDataChange('delivery_phone', e.target.value)}
            value={formState.use_same_billing_address ? formState.billing_phone : formState.delivery_phone}
            disabled={formState.use_same_billing_address}
          />
          <CustomInputLabel htmlFor="delivery_phone_input">
            Phone number
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="delivery_po_box"
            onChange={(e) => handleFormDataChange('delivery_po_box', e.target.value)}
            value={formState.use_same_billing_address ? formState.billing_po_box : formState.delivery_po_box}
            disabled={formState.use_same_billing_address}
          />
          <CustomInputLabel htmlFor="delivery_po_box">
            P.O. Box
          </CustomInputLabel>
        </Grid>
        <Grid item xs={12}>
          <InputTitle>Trade License</InputTitle>
        </Grid >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="trade-license-number"
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
          views={['day', 'month', 'year']}
          placeholder="Example : 23/10/2023"
          slotProps={{ textField: { fullWidth: true } }}
          onChange={(newValue) => handleFormDataChange('license_expiration', dayjs(newValue).format('DD/MM/YYYY'))}
          format="DD/MM/YYYY"
          inputFormat="DD/MM/YYYY"
          value={formState.license_expiration ? dayjs(data.general_info.license_expiration, 'DD/MM/YYYY') : null}
        />
          <CustomInputLabel htmlFor="trade-license-number">
            Trade license expiry date
          </CustomInputLabel>
        </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputTitle>Number of years in food service industry</InputTitle>
          <TextField
          fullWidth
          onChange={(e) => handleFormDataChange('service_years', e.target.value)}
          value={formState.service_years}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputTitle>VAT registration number</InputTitle>
          <TextField
            fullWidth
            onChange={(e) => handleFormDataChange('vat_number', e.target.value)}
            value={formState.vat_number}
          />
        </Grid>
        <Grid item xs={12} sm={0}>
        <InputTitle>Website</InputTitle>
          <TextField
            fullWidth
            onChange={(e) => handleFormDataChange('website_url', e.target.value)}
            value={formState.website_url}
          />
        </Grid>
      </Grid >
    </section>
  );
};

export default GeneralInfoComponent;