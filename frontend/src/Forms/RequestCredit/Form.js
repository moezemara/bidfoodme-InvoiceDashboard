import React, { useState, useEffect } from 'react';
// import { makeStyles } from 'tss-react/mui';
// import { Stepper, Step, StepLabel } from '@mui/material';
import GeneralInfoComponent from './FormComponents/GeneralInfoComponent';
import ContactComponent from './FormComponents/ContactComponent';
import ReferencesComponent from './FormComponents/ReferencesComponent';
import UploadComponent from './FormComponents/UploadComponent';
import * as FormStyles from './FormStyles';

import Timer from './utils/Timer';

import { RequestCreditContext } from './Contexts/RequestCreditContext';
import * as ApplicationApi from './utils/ApplicationApi';


const Form = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNDYzMjMzMGEtOTRiMS00NjZmLWE0ZDgtNWY5MzNmYTE3MmZkIiwiaWF0IjoxNjc5OTYwMDU0LCJleHAiOjE2ODAzMjAwNTR9.Beq0vTV2aDrgfKU6H9UQ5Hfa3UH57FZTVdITblUlK60"

  const { LoadSavedProgress, isDataLoaded } = React.useContext(RequestCreditContext);

  const [ data, setData ] = useState({
    general_info: {},
    license_info: {},
    contacts_info: {
      Owner_Contact: [],
      Department_Contact: []
    },
    references_info: {
      supplier_information: []
    },
    upload_info: {},
  });

  const [currentStep, setCurrentStep] = useState(1);

  // state for timer in each step of the form (general, contact, references, upload)
  const [generalTimerValue, setGeneralTimerValue] = useState(0);
  const [contactTimerValue, setContactTimerValue] = useState(0);
  const [referencesTimerValue, setReferencesTimerValue] = useState(0);
  const [uploadTimerValue, setUploadTimerValue] = useState(0);

  // handle next and back button click
  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  // handle timer change for each step
  const handleOnGeneralTimerChange = (value) => {
    setGeneralTimerValue(value);
  };

  const handleOnContactTimerChange = (value) => {
    setContactTimerValue(value);
  };

  const handleOnReferencesTimerChange = (value) => {
    setReferencesTimerValue(value);
  };

  const handleOnUploadTimerChange = (value) => {
    setUploadTimerValue(value);
  };

  const handleOnDataChange = (newData) => {
    setData(newData);
  }

  const getCurrentStepsName = () => {
    const steps = [];
    switch (currentStep) {
      case 1:
        steps.push('general');
        steps.push('license');
        break;
      case 2:
        steps.push('contacts');
        break;
      case 3:
        steps.push('bank')
        steps.push('suppliers');
        break;
      case 4:
        steps.push('uploads');
        steps.push('requests')
        break;
      default:
        break;
    }
    return steps;
  }

  const getCurrentTimerValue = () => {
    switch (currentStep) {
      case 1:
        return ["general", generalTimerValue];
      case 2:
        return ["contacts", contactTimerValue];
      case 3:
        return ["references", referencesTimerValue];
      case 4:
        return ["uploads", uploadTimerValue];
      default:
        return 0;
    }
  }

  const getStepData = (step) => {
    let submissionData = []

    const steps_keys = {
      'general': ["first_name", "last_name", "country", "city", "phone", "po_box", "service_years"],
      'license': ["vat_number", "license_number", "license_expiration"],
      'contacts': ["Owner_Contact", "Department_Contact"],
      'bank': ["bank_name", "bank_city", "bank_account_number", "bank_iban", "bank_swift", "bank_account_type"],
      'suppliers': ["name", "contact", "designation", "address", "phone", "email"],
      'uploads': ["tradelicensefile", "ownerpassportfile", "ownervisafile", "ownerelofile", "vatfile"],
      'requests': ["credit_period", "credit_limit"]
    }

    const uploads_original_names = {
      "tradelicensefile": "license",
      "ownerpassportfile": "owner_pp",
      "ownervisafile": "owner_visa",
      "ownerelofile": "owner_elo",
      "vatfile": "vat"
    }

    const fieldData = {}
    // get the current step data
    switch (step) {
      case 'general':
      case 'license':
        for (let i = 0; i < steps_keys[step].length; i++) {
          const key = steps_keys[step][i];
          fieldData[key] = data.general_info[key];
        }
        submissionData = fieldData;
        break;
      case 'contacts':
        const contactData = data.contacts_info;

        submissionData.push(...contactData.Owner_Contact, ...contactData.Department_Contact);

        // if key has null value remove the whole key
        for (let i = 0; i < submissionData.length; i++) {
          // loop on keys
          for (const key in submissionData[i]) {
            if (submissionData[i][key] === null) {
              delete submissionData[i][key];
            }
          }
        }

        
        break;
      case 'bank':
        for (let i = 0; i < steps_keys[step].length; i++) {
          const key = steps_keys[step][i];
          fieldData[key] = data.references_info[key];
        }
        submissionData = fieldData;
        break;
      case 'suppliers':
        submissionData.push(...data.references_info.supplier_information);
        break;
      case 'uploads':
      case 'requests':
        for (let i = 0; i < steps_keys[step].length; i++) {
          const key = steps_keys[step][i];
          // check if the value exists
          if (data.upload_info[key] === undefined || data.upload_info[key] === null) {
            continue;
          }

          if (step === 'uploads' && uploads_original_names[key] !== undefined){
            fieldData[uploads_original_names[key]] = data.upload_info[key];
            continue;
          }
          fieldData[key] = data.upload_info[key];
        }

        submissionData = fieldData;

        break;
      default:
        break
    }
    return submissionData;
  }

  const handleSaveClick = async () => {
    // get the current step
    const currentSteps = getCurrentStepsName();

    // get the current timer value
    const currentTimerValue = getCurrentTimerValue();

    for (let i = 0; i < currentSteps.length; i++) {
      const stepData = getStepData(currentSteps[i]);
      
      let response = ''
      if (currentSteps[i] === 'uploads'){
        response = await ApplicationApi.SaveProgressUploads(token, stepData)
      }else{
        response = await ApplicationApi.SaveProgress(token, currentSteps[i], stepData)
      }
      
      if (response.success !== 1){
        return;
      }
      
      response = await ApplicationApi.UpdateTime(token, currentTimerValue[0], {time_spent: currentTimerValue[1]})
      console.log(response)
    }
    
  };

  const handleFinishClick = async () => {
    const response = await ApplicationApi.Finish(token)
    console.log(response)
  }

  const LoadSavedProgress_Parent = async () => {
    const loadedData = await LoadSavedProgress();
    if(loadedData === null){
      setData(loadedData);
    }
  }


  useEffect(() => {
    LoadSavedProgress_Parent()
    // eslint-disable-next-line
  }, []);


  
  return (
    <>
    <FormStyles.Container>
      <FormStyles.FormContainer>
        <FormStyles.FormHeader>
            <FormStyles.FormLogo src={require("./images/bidfood-logo.png")} alt="Logo" />
        </FormStyles.FormHeader>
        <FormStyles.FormDivider />
            <div>
                <FormStyles.FormName>
                  BidFood Request Form
                  </FormStyles.FormName>
                <FormStyles.FormName>
                
                </FormStyles.FormName>
                <FormStyles.FormDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit</FormStyles.FormDescription>
            </div>
            <FormStyles.FormStepContainer>
            <FormStyles.FormStep active={currentStep >= 1}>
  <div className="step-number">1</div>
  <div className="step-name">General Information</div>
  <div className={`form-step-divider ${currentStep === 1 ? "active" : ""}`} />
</FormStyles.FormStep>
  <FormStyles.FormStep active={currentStep >= 2}>
    <div className="step-number">2</div>
    <div className="step-name">Contact</div>
    <div className={`form-step-divider ${currentStep === 2 ? "active" : ""}`} />
  </FormStyles.FormStep>
  <FormStyles.FormStep active={currentStep >= 3}>
    <div className="step-number">3</div>
    <div className="step-name">References</div>
    <div className={`form-step-divider ${currentStep === 3 ? "active" : ""}`} />
  </FormStyles.FormStep>
  <FormStyles.FormStep active={currentStep >= 4}>
    <div className="step-number">4</div>
    <div className="step-name">Upload</div>
    <div className={`form-step-divider ${currentStep === 4 ? "active" : ""}`} />
  </FormStyles.FormStep>
</FormStyles.FormStepContainer>
 
            <FormStyles.FormStepCard>
                {/* <FormStyles.FormStepName>General Information</FormStyles.FormStepName>
                <FormStyles.FormStepDescription>Let's begin by filling out your general information</FormStyles.FormStepDescription> */}

                {/* if current step is 1, show the GeneralInfoComponent and stat generalcounter also do not make it count from 0 again*/}


                {currentStep === 1 && isDataLoaded && <><GeneralInfoComponent handleOnDataChange={handleOnDataChange}/> <Timer onTimerChange={handleOnGeneralTimerChange} startFrom={generalTimerValue} /></>}
                {currentStep === 2 && isDataLoaded && <><ContactComponent handleOnDataChange={handleOnDataChange}/> <Timer onTimerChange={handleOnContactTimerChange} startFrom={contactTimerValue} /></>}
                {currentStep === 3 && isDataLoaded && <><ReferencesComponent handleOnDataChange={handleOnDataChange}/> <Timer onTimerChange={handleOnReferencesTimerChange} startFrom={referencesTimerValue} /></>}
                {currentStep === 4 && isDataLoaded && <><UploadComponent handleOnDataChange={handleOnDataChange}/> <Timer onTimerChange={handleOnUploadTimerChange} startFrom={uploadTimerValue} /></>}
                
            </FormStyles.FormStepCard>

            <FormStyles.FormFooter>
                {/* if current step is 1, disable the back button */}
                {currentStep !== 1 && <FormStyles.FormButton onClick={handleBackClick}>Back</FormStyles.FormButton>}
                {/* if current step is 4, don't show the next button */}
                {currentStep !== 4 && <FormStyles.FormButton onClick={handleNextClick}>Next</FormStyles.FormButton>}
                <FormStyles.FormButton onClick={handleSaveClick}>Save</FormStyles.FormButton>
                {/* if current step is 4, show Finish button*/}
                {currentStep === 4 && <FormStyles.FormButton onClick={handleFinishClick}>Finish</FormStyles.FormButton>}
                </FormStyles.FormFooter>
        </FormStyles.FormContainer>
    </FormStyles.Container>
    </>
  );
};
  
export default Form;