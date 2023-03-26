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

const GeneralInfoComponent = () => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div>
    <FormStepName>General Information</FormStepName>
    <FormStepDescription>Let's begin by filling out your general information</FormStepDescription>

    <Grid container spacing={7}>
      <Grid item xs={12} sm={6}>
        <TextField label="First Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Last Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Country" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="City" variant="outlined" fullWidth />
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
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Trade License Expiration Date"
          inputVariant="outlined"
          // format="MM/yy"
          value={selectedDate} onChange={(newSelectedDate) =>setSelectedDate(newSelectedDate)}
          views={['month', 'year']}
          slotProps={{ textField: { fullWidth: true } }}
        />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Phone Number" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="P.O. Box" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Years in Food Service" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="VAT Registration Number" variant="outlined" fullWidth />
      </Grid>
    </Grid>
    </div>
  );
};

export default GeneralInfoComponent;