import React, { useState } from 'react';
import {
  Typography
} from '@mui/material';

import DataTable from './DataTable/DataTable';
import { LabelStyle, FormStepName, FormStepDescription } from './FormComponentsStyles';

import { RequestCreditContext } from '../Contexts/RequestCreditContext';


const ContactComponent = ({ handleOnDataChange }) => {
  const { data, updateData } = React.useContext(RequestCreditContext);
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
        email: row.Email.data,
        nationality: row.Nationality.data
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
        email: row.Email.data
      })
    })

    const updatedFormState = { ...formState, Department_Contact: convertedArray };

    setFormState(updatedFormState);
    updateData("contacts_info", updatedFormState);
    handleOnDataChange({ ...data, contacts_info: updatedFormState });
  };

  const Owner_Contact_fields = [
      { field: "Title", headerName: "Title", type: "select", options: ["Owner", "Partner"]},
      { field: "Name", headerName: "Name", type: "text"},
      { field: "Phone", headerName: "Phone", type: "text"},
      { field: "Email", headerName: "Email", type: "text"},
      { field: "Nationality", headerName: "Nationality", type: "text", options: ["AE", "USA", "Canada", "Australia", "New Zealand", "Other"]}
  ];

  const Department_Contact_fields = [
      { field: "Title", headerName: "Title", type: "text"},
      { field: "Name", headerName: "Name", type: "text"},
      { field: "Phone", headerName: "Phone", type: "text"},
      { field: "Email", headerName: "Email", type: "text"}
  ];


  const Department_Contact_defaultRows = [
      {
          Title: { data: "Manager", editable: false },
          Name: { data: "", editable: true },
          Phone: { data: "", editable: true },
          Email: { data: "", editable: true }
      },
      {
          Title: { data: "Payable", editable: false },
          Name: { data: "", editable: true },
          Phone: { data: "", editable: true },
          Email: { data: "", editable: true }
      },
      {
          Title: { data: "Receivable", editable: false },
          Name: { data: "", editable: true },
          Phone: { data: "", editable: true },
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
        Email: { data: row.email, editable: true },
        Nationality: { data: row.nationality, editable: true }
      });
    });
  }

  if (formState.Department_Contact !== undefined && formState.Department_Contact.length > 0){
    const replaced_rows = []
    formState.Department_Contact.forEach((row) => {
      if((row.title === "Manager" || row.title === "Payable" || row.title === "Receivable") && !replaced_rows.includes(row.title)) {
        replaced_rows.push(row.title)
        Department_Contact_defaultRows.forEach((default_row) => {
          if(default_row.Title.data === row.title) {
            default_row.Name.data = row.name
            default_row.Phone.data = row.phone
            default_row.Email.data = row.email
          }
        });

      } else {
        Department_Contact_defaultRows.push({
          Title: { data: row.title, editable: true },
          Name: { data: row.name, editable: true },
          Phone: { data: row.phone, editable: true },
          Email: { data: row.email, editable: true }
        });
      }
    }
    );
  }





  return (
    <div>
      <FormStepName>Contact</FormStepName>
      <FormStepDescription>At this stage, we require your contact information</FormStepDescription>
      <Typography variant="h6" className={classes.label}>Owner or Partner</Typography>
      <DataTable onDataTableChange={handleOwner_ContactChange} columns={Owner_Contact_fields} defaultRows={Owner_contact_defaultRows}/>
      <Typography variant="h6" className={classes.label}>Account department</Typography>
      <DataTable onDataTableChange={handleDepartment_ContactChange} columns={Department_Contact_fields} defaultRows={Department_Contact_defaultRows}/>
    </div>
  );  
};

export default ContactComponent;
