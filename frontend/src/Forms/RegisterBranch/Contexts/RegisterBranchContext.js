import React, { createContext, useState } from 'react';
import * as ApplicationApi from '../utils/ApplicationApi';
import ConstructData from './ConstructData';

export const RegisterBranchContext = createContext();

export const RegisterBranchProvider = ({ children }) => {
  const [data, setData] = useState({
    general_info: {},
    license_info: {},
    contacts_info: {},
    references_info: {},
    upload_info: {
      authorised_signatures: [],
    },
  });

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // handle fields change in all form pages
  const updateData = (key, value) => {    

    const newData = {
      ...data,
      [key]: {
        ...data[key],
        ...value,
      },
    }


    setData(newData);
  };

  const LoadSavedProgress = async (token) => {
    const response = await ApplicationApi.LoadSavedProgress(token);
   
    if (response.success === 0 || response.success === -1) {
      setIsDataLoaded(true);
      return;
    }



    const constructedData = ConstructData(response.message);

    // const contactFormData = 
    setData(constructedData);
    
    // const Owner_Contact_defaultValues = data.contacts_info.filter((item) => item.title === 'Owner' || item.title === 'Partner');
    // const Department_Contact_defaultValues = data.contacts_info.filter((item) => item.title !== 'Owner' && item.title !== 'Partner');


    // setContactInfo({Owner_Contact: Owner_Contact_defaultValues, Department_Contact: Department_Contact_defaultValues});
    
    setIsDataLoaded(true);
    return constructedData
  }

  const props = {
    data,
    updateData,
    LoadSavedProgress,
    isDataLoaded
  }

  return (
    <RegisterBranchContext.Provider value={props}>
      {children}
    </RegisterBranchContext.Provider>
  );
}

export default RegisterBranchContext;