import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography
} from '@mui/material';

import DataTable from './DataTable/DataTable';
import { LabelStyle, FormStepName, FormStepDescription } from './FormComponentsStyles';
import { RequestCreditContext } from '../Contexts/RequestCreditContext';

const ReferencesComponent = ({ handleOnDataChange }) => {
  const { data, updateData } = React.useContext(RequestCreditContext);

  const classes = LabelStyle();


  // state for the whole form
  const [formState, setFormState] = useState({
    bank_name: data.references_info.bank_name || "",
    bank_city: data.references_info.bank_city || "",
    bank_swift: data.references_info.bank_swift || "",
    bank_iban: data.references_info.bank_iban || "",
    bank_account_number: data.references_info.bank_account_number || "",
    bank_account_type: data.references_info.bank_account_type || "",
    supplier_information: data.references_info.supplier_information || []
  });

  // handle the change in the data tables
  const handleSupplier_InformationChange = (newData) => {
    const convertedArray = []

    newData.forEach((row) => {
      convertedArray.push({
        name: row.Name.data,
        contact: row.Contact.data,
        designation: row.Designation.data,
        address: row.Address.data,
        phone: row.Phone.data,
        email: row.Email.data
      })
    })

    const updatedFormState = { ...formState, supplier_information: convertedArray };

    setFormState(updatedFormState);
    updateData("references_info", updatedFormState);
    handleOnDataChange({ ...data, references_info: updatedFormState });
  };

  // function to update form data and call callback
  const handleFormDataChange = (field, value) => {
    const updatedFormState = { ...formState, [field]: value };
    setFormState(updatedFormState);
    updateData('references_info', updatedFormState);
    handleOnDataChange({ ...data, references_info: updatedFormState });
  };

  const columns = [
    { field: "Name", headerName: "Name", type: "text"},
    { field: "Contact", headerName: "Contact", type: "text"},
    { field: "Designation", headerName: "Designation", type: "text"},
    { field: "Address", headerName: "Address", type: "text"},
    { field: "Phone", headerName: "Phone", type: "text"},
    { field: "Email", headerName: "Email", type: "text"}
  ];


  const supplier_information_default_rows = []
  if(formState.supplier_information !== undefined && formState.supplier_information.length > 0) {
    data.references_info.supplier_information.forEach((row) => {
      supplier_information_default_rows.push({
        Name: { data: row.name, editable: true },
        Contact: { data: row.contact, editable: true },
        Designation: { data: row.designation, editable: true },
        Address: { data: row.address, editable: true },
        Phone: { data: row.phone, editable: true },
        Email: { data: row.email, editable: true }
      })
    })
  }
  

  return (
    <div>
      <FormStepName>References</FormStepName>
      <FormStepDescription>In this step, please provide your financial information</FormStepDescription>
      <Typography variant="h6" className={classes.label}>Bank Details</Typography>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
          <TextField
          label="Name" variant="outlined" fullWidth 
          onChange={(e) => handleFormDataChange('bank_name', e.target.value)}
          value = {formState.bank_name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          label="City" variant="outlined" fullWidth
          onChange={(e) => handleFormDataChange('bank_city', e.target.value)}
          value = {formState.bank_city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          label="Account Number" variant="outlined" fullWidth
          onChange={(e) => handleFormDataChange('bank_account_number', e.target.value)}
          value = {formState.bank_account_number}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          label="IBAN" variant="outlined" fullWidth
          onChange={(e) => handleFormDataChange('bank_iban', e.target.value)}
          value = {formState.bank_iban}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          label="Swift" variant="outlined" fullWidth
          onChange={(e) => handleFormDataChange('bank_swift', e.target.value)}
          value = {formState.bank_swift}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          label="Account Type" variant="outlined" fullWidth
          onChange={(e) => handleFormDataChange('bank_account_type', e.target.value)}
          value = {formState.bank_account_type}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" className={classes.label}>Supplier Information</Typography>
      <DataTable onDataTableChange={handleSupplier_InformationChange} columns={columns} defaultRows={supplier_information_default_rows}/>
    </div>
  );  
};

export default ReferencesComponent;
