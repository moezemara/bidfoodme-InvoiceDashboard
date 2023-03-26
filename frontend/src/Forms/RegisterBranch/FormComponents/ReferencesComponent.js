import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import DataTable from './DataTable/DataTable';
import { LabelStyle, FormStepName, FormStepDescription } from './FormComponentsStyles';

const ReferencesComponent = () => {
  const classes = LabelStyle();
  const columns = [
    { field: "Name", headerName: "Name", type: "text"},
    { field: "Contact", headerName: "Contact", type: "text"},
    { field: "Designation", headerName: "Designation", type: "text"},
    { field: "Address", headerName: "Address", type: "text"},
    { field: "Phone", headerName: "Phone", type: "text"},
    { field: "Email", headerName: "Email", type: "text"}
  ];
  
//   const defaultRows = [
//     {
//       fullName: { data: "John", editable: false },
//       emailAddress: { data: "john.doe@example.com", editable: true },
//       salary: { data: "50000", editable: false },
//     },
//     {
//       fullName: { data: "Jane Dose", editable: true },
//       emailAddress: { data: "jane.doe@example.com", editable: true },
//       salary: { data: "60000", editable: true },
//     },
//   ];

  return (
    <div>
      <FormStepName>References</FormStepName>
      <FormStepDescription>In this step, please provide your financial information</FormStepDescription>
      <Typography variant="h6" className={classes.label}>Bank Details</Typography>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
          <TextField label="Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Swift" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="IBAN" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Account Number" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Account Type" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h6" className={classes.label}>Supplier Information</Typography>
      <DataTable columns={columns}/>
    </div>
  );  
};

export default ReferencesComponent;
