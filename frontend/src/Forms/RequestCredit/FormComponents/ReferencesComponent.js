import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem
} from '@mui/material';

import DataTable from './DataTable/DataTable';
import { LabelStyle, FormStepName, InputTitle, ContentWrapper } from './FormComponentsStyles';
import { RequestCreditContext } from '../Contexts/RequestCreditContext';

const ReferencesComponent = ({ handleOnDataChange }) => {
  const { data, updateData } = React.useContext(RequestCreditContext);

  const classes = LabelStyle();


  // state for the whole form
  const [formState, setFormState] = useState({
    bank_name: data.references_info.bank_name || "",
    bank_branch: data.references_info.bank_branch || "",
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
    { field: "Name", headerName: "Company Name", type: "text", cellWidth: "16%" },
    { field: "Contact", headerName: "Contact Person", type: "text", cellWidth: "16%" },
    { field: "Address", headerName: "Company Address", type: "text", cellWidth: "16%" },
    { field: "Phone", headerName: "Phone Number", type: "text", cellWidth: "16%" },
    { field: "Email", headerName: "Email", type: "text", cellWidth: "16%" }
  ];


  const supplier_information_default_rows = []
  if (formState.supplier_information !== undefined && formState.supplier_information.length > 0) {
    data.references_info.supplier_information.forEach((row) => {
      supplier_information_default_rows.push({
        Name: { data: row.name, editable: true },
        Contact: { data: row.contact, editable: true },
        Address: { data: row.address, editable: true },
        Phone: { data: row.phone, editable: true },
        Email: { data: row.email, editable: true }
      })
    })
  }


  return (
    <section className='reference_sec'>
      <ContentWrapper>
        <FormStepName>References</FormStepName>
        {/* <FormStepDescription>In this step, please provide your financial information</FormStepDescription> */}
        <Typography variant="h6" className={`${classes.label} tblTop_title`}>Bank Details</Typography>
        <Grid container rowSpacing={2} columnSpacing={{ md: 4 }}>
          <Grid item xs={12} sm={6}>
          <InputTitle>Bank Name</InputTitle>
            <TextField
              fullWidth
              onChange={(e) => handleFormDataChange('bank_name', e.target.value)}
              value={formState.bank_name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputTitle>Branch</InputTitle>
            <TextField
              fullWidth
              onChange={(e) => handleFormDataChange('bank_branch', e.target.value)}
              value={formState.bank_branch}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputTitle>Swift</InputTitle>
            <TextField
              fullWidth
              onChange={(e) => handleFormDataChange('bank_swift', e.target.value)}
              value={formState.bank_swift}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputTitle>IBAN Number</InputTitle>
            <TextField
              fullWidth
              onChange={(e) => handleFormDataChange('bank_iban', e.target.value)}
              value={formState.bank_iban}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputTitle>Account Number</InputTitle>
            <TextField
              fullWidth
              id='account_number_input'
              onChange={(e) => handleFormDataChange('bank_account_number', e.target.value)}
              value={formState.bank_account_number}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputTitle>Account Type</InputTitle>
            <Select
              fullWidth
              id='account_type_input'
              onChange={(e) => handleFormDataChange('bank_account_type', e.target.value)}
              value={formState.bank_account_type}
            >
              <MenuItem value="Current">Current</MenuItem>
              <MenuItem value="Saving">Saving</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Typography variant="h6" className={`${classes.label} tbl_title`} style={{ marginTop: '75px' }}>Top 3 Supplier References</Typography>
        <DataTable onDataTableChange={handleSupplier_InformationChange} columns={columns} defaultRows={supplier_information_default_rows} addRow_bTn_ColsPan={6} unique_key={'Supplier_Information'} maxRows={3}/>
      </ContentWrapper>
    </section>
  );
};

export default ReferencesComponent;