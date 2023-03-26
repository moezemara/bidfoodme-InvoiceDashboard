import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import DataTable from './DataTable/DataTable';
import { LabelStyle, FormStepName, FormStepDescription } from './FormComponentsStyles';

const ContactComponent = () => {
  const classes = LabelStyle();
    const Owner_Contact_fields = [
        { field: "Type", headerName: "Title", type: "select", options: ["Owner", "Partner"]},
        { field: "Name", headerName: "Name", type: "text"},
        { field: "Phone", headerName: "Phone", type: "text"},
        { field: "Email", headerName: "Email", type: "text"},
        { field: "Nationality", headerName: "Nationality", type: "select", options: ["UK", "USA", "Canada", "Australia", "New Zealand", "Other"]}
    ];
  
    const Department_Contact_fields = [
        { field: "Type", headerName: "Title", type: "text"},
        { field: "Name", headerName: "Name", type: "text"},
        { field: "Phone", headerName: "Phone", type: "text"},
        { field: "Email", headerName: "Email", type: "text"}
    ];

    const Department_Contact_defaultRows = [
        {
            Type: { data: "Manager", editable: false },
            Name: { data: "", editable: true },
            Phone: { data: "", editable: true },
            Email: { data: "", editable: true }
        },
        {
            Type: { data: "Payable", editable: false },
            Name: { data: "", editable: true },
            Phone: { data: "", editable: true },
            Email: { data: "", editable: true }
        },
        {
            Type: { data: "Receivable", editable: false },
            Name: { data: "", editable: true },
            Phone: { data: "", editable: true },
            Email: { data: "", editable: true }
        }
    ];

  return (
    <div>
      <FormStepName>Contact</FormStepName>
      <FormStepDescription>At this stage, we require your contact information</FormStepDescription>
      <Typography variant="h6" className={classes.label}>Owner or Partner</Typography>
      <DataTable columns={Owner_Contact_fields}/>
      <Typography variant="h6" className={classes.label}>Account department</Typography>
      <DataTable columns={Department_Contact_fields} defaultRows={Department_Contact_defaultRows}/>
    </div>
  );  
};

export default ContactComponent;
