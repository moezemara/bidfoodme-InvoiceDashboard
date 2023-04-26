import React, { useState } from 'react';
import { Typography } from '@mui/material';
import DataTable from './DataTable/DataTable';
import { ContactSecWrapper, LabelStyle, FormStepName, FormStepDescription, BlockTitle, BlockDescription } from './FormComponentsStyles';
import { RegisterBranchContext } from '../Contexts/RegisterBranchContext';

const ContactComponent = ({ handleOnDataChange }) => {
  const { data, updateData } = React.useContext(RegisterBranchContext);
  const classes = LabelStyle();

  // state for the whole form
  const [formState, setFormState] = useState(data.contacts_info || {
    Owner_Contact: [],
    Department_Contact: []
  });

  // handle the change in the data tables
  const handleOwner_ContactChange = (newData) => {
    const convertedArray = []

    newData.forEach((row) => {
      convertedArray.push({
        title: row.Title.data,
        name: row.Name.data,
        phone: row.Phone.data,
        mobile: row.Mobile.data,
        email: row.Email.data,
        shareholder_percentage: row.Shareholder_Percentage.data,
        authorised_signature: row.Authorised_Signature.data
      })
    })

    const updatedFormState = { ...formState, Owner_Contact: convertedArray };

    updateData("contacts_info", updatedFormState);
    setFormState(updatedFormState);
    handleOnDataChange({ ...data, contacts_info: updatedFormState });
  };

  const handleDepartment_ContactChange = (newData) => {
    const convertedArray = []

    newData.forEach((row) => {
      convertedArray.push({
        title: row.Title.data,
        name: row.Name.data,
        phone: row.Phone.data,
        mobile: row.Mobile.data,
        email: row.Email.data
      })
    })

    const updatedFormState = { ...formState, Department_Contact: convertedArray };

    setFormState(updatedFormState);
    updateData("contacts_info", updatedFormState);
    handleOnDataChange({ ...data, contacts_info: updatedFormState });
  };

  const Owner_Contact_fields = [
    { field: "Title", headerName: "Title", type: "select", options: ["Owner", "Partner", "Manager", "Authorized Signatory"], cellWidth: "14.3%"},
    { field: "Name", headerName: "Name", type: "text", cellWidth: "14.3%" },
    { field: "Phone", headerName: "Phone number", type: "text", cellWidth: "14.3%" },
    { field: "Mobile", headerName: "Mobile number", type: "text", cellWidth: "14.3%" },
    { field: "Email", headerName: "Email", type: "text", cellWidth: "14.3%" },
    { field: "Shareholder_Percentage", headerName: "Shareholder Percentage", props:"percentage", type: "text", cellWidth: "14.3%"},
    { field: "Authorised_Signature", headerName: "Authorised Signature", type: "radio", cellWidth: "14.3%", CellAlign: 'center'}
  ];

  const Department_Contact_fields = [
    { field: "Title", headerName: "Title", type: "text", cellWidth: "25%", CellBg: true, CellAlign: 'center' },
    { field: "Name", headerName: "Name", type: "text", cellWidth: "25%" },
    { field: "Phone", headerName: "Phone number", type: "text", cellWidth: "25%" },
    { field: "Mobile", headerName: "Mobile number", type: "text", cellWidth: "25%" },
    { field: "Email", headerName: "Email", type: "text", cellWidth: "25%" }
  ];


  const Department_Contact_defaultRows = [
    {
      Title: { data: "Finance Manager", editable: false },
      Name: { data: "", editable: true },
      Phone: { data: "", editable: true },
      Mobile: { data: "", editable: true },
      Email: { data: "", editable: true }
    },
    {
      Title: { data: "Accounts Payable", editable: false },
      Name: { data: "", editable: true },
      Phone: { data: "", editable: true },
      Mobile: { data: "", editable: true },
      Email: { data: "", editable: true }
    },
    {
      Title: { data: "Purchasing Manager", editable: false },
      Name: { data: "", editable: true },
      Phone: { data: "", editable: true },
      Mobile: { data: "", editable: true },
      Email: { data: "", editable: true }
    }
  ];

  // map the default values to the data table


  const Owner_contact_defaultRows = []
  if (formState.Owner_Contact !== undefined && formState.Owner_Contact.length > 0) {
    formState.Owner_Contact.forEach((row) => {
      Owner_contact_defaultRows.push({
        Title: { data: row.title, editable: true },
        Name: { data: row.name, editable: true },
        Phone: { data: row.phone, editable: true },
        Mobile: { data: row.mobile, editable: true },
        Email: { data: row.email, editable: true },
        Shareholder_Percentage: { data: row.shareholder_percentage, editable: true },
        Authorised_Signature: { data: row.authorised_signature, editable: true }
      });
    });
  }

  if (formState.Department_Contact !== undefined && formState.Department_Contact.length > 0) {
    const replaced_rows = []
    formState.Department_Contact.forEach((row) => {
      if ((row.title === "Finance Manager" || row.title === "Accounts Payable" || row.title === "Purchasing Manager") && !replaced_rows.includes(row.title)) {
        replaced_rows.push(row.title)
        Department_Contact_defaultRows.forEach((default_row) => {
          if (default_row.Title.data === row.title) {
            default_row.Name.data = row.name
            default_row.Phone.data = row.phone
            default_row.Mobile.data = row.mobile
            default_row.Email.data = row.email
          }
        });

      } else {
        Department_Contact_defaultRows.push({
          Title: { data: row.title, editable: true, CellBg: true },
          Name: { data: row.name, editable: true },
          Phone: { data: row.phone, editable: true },
          Mobile: { data: row.mobile, editable: true },
          Email: { data: row.email, editable: true }
        });
      }
    }
    );
  }


  return (
    <ContactSecWrapper>
      <FormStepName>Contact</FormStepName>
      <FormStepDescription>At this stage, we require your contact information</FormStepDescription>
      <BlockTitle>Owners/Partners</BlockTitle>
      <BlockDescription>Please add at least one field to the table before submitting</BlockDescription>
      <DataTable onDataTableChange={handleOwner_ContactChange} columns={Owner_Contact_fields} defaultRows={Owner_contact_defaultRows} addRow_bTn_ColsPan={4} unique_key={'Owner_Contact'} checkBox={true} maxRows={3}/>
      <Typography variant="h6" className={`${classes.label} tbl_title`}>Primary Contacts</Typography>
      <DataTable onDataTableChange={handleDepartment_ContactChange} columns={Department_Contact_fields} defaultRows={Department_Contact_defaultRows} unique_key={'Department_Contact'} maxRows={3}/>
    </ContactSecWrapper>
  );
};

export default ContactComponent;
