import React, { useState, useEffect } from 'react';
// import { makeStyles } from 'tss-react/mui';
// import { Stepper, Step, StepLabel } from '@mui/material';
import GeneralInfoComponent from './FormComponents/GeneralInfoComponent';
import ContactComponent from './FormComponents/ContactComponent';
import UploadComponent from './FormComponents/UploadComponent';
import * as FormStyles from './FormStyles';
import CheckIcon from '@mui/icons-material/Check';
import { Link, useSearchParams } from 'react-router-dom';
import Timer from './utils/Timer';
import { RegisterBranchContext } from './Contexts/RegisterBranchContext';
import * as ApplicationApi from './utils/ApplicationApi';
import Dialog from './utils/Dialog';

const Form = () => {
  const [searchParams] = useSearchParams();

  const { LoadSavedProgress, isDataLoaded } = React.useContext(RegisterBranchContext);

  const token = searchParams.get("ss");

  const [data, setData] = useState({
    general_info: {},
    license_info: {},
    contacts_info: {
      Owner_Contact: [],
      Department_Contact: []
    },
    upload_info: {},
  });

  const [currentStep, setCurrentStep] = useState(1);

  // state for timer in each step of the form (general, contact, upload)
  const [generalTimerValue, setGeneralTimerValue] = useState(0);
  const [contactTimerValue, setContactTimerValue] = useState(0);
  const [uploadTimerValue, setUploadTimerValue] = useState(0);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({});

  // handle next and back button click
  const handleNextClick = async () => {
    const saveResponse = await handleSaveClick();
    // if (!saveResponse) {
    //   return
    // }
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = async () => {
    const saveResponse = await handleSaveClick();
    // if (!saveResponse) {
    //   return
    // }
    setCurrentStep(currentStep - 1);
  };

  // handle timer change for each step
  const handleOnGeneralTimerChange = (value) => {
    setGeneralTimerValue(value);
  };

  const handleOnContactTimerChange = (value) => {
    setContactTimerValue(value);
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
        return ["uploads", uploadTimerValue];
      default:
        return 0;
    }
  }

  const getStepData = (step) => {
    let submissionData = []

    const steps_keys = {
      'general': ["outlet_legal_name", "outlet_trade_name", "outlet_group_name",
      "billing_outlet_address", "billing_country", "billing_city", "billing_phone", "billing_po_box", 
      "delivery_outlet_address", "delivery_country", "delivery_city", "delivery_phone", "delivery_po_box", 
      "service_years", "website_url"],
      'license': ["vat_number", "license_number", "license_expiration"],
      'contacts': ["Owner_Contact", "Department_Contact"],
      'bank': ["bank_name", "bank_city", "bank_account_number", "bank_iban", "bank_swift", "bank_account_type"],
      'suppliers': ["name", "contact", "address", "phone", "email"],
      'uploads': ["tradelicensefile", "ownerpassportfile", "ownervisafile", "ownereidfile", "vatfile", "hasVatCert"],
      'requests': ["credit_limit"]
    }

    const uploads_original_names = {
      "tradelicensefile": "license",
      "ownerpassportfile": "owner_pp",
      "ownervisafile": "owner_visa",
      "ownereidfile": "owner_eid",
      "vatfile": "vat"
    }

    const fieldData = {}
    // get the current step data
    switch (step) {
      case 'general':
      case 'license':

        if (data.general_info["use_same_billing_address"] === true) {
          data.general_info["delivery_outlet_address"] = data.general_info["billing_outlet_address"]
          data.general_info["delivery_country"] = data.general_info["billing_country"]
          data.general_info["delivery_city"] = data.general_info["billing_city"]
          data.general_info["delivery_phone"] = data.general_info["billing_phone"]
          data.general_info["delivery_po_box"] = data.general_info["billing_po_box"]
        }

        for (let i = 0; i < steps_keys[step].length; i++) {
          const key = steps_keys[step][i];
          fieldData[key] = data.general_info[key];
        }
        submissionData = fieldData;
        break;
      case 'contacts':
        const contactData = data.contacts_info;
        console.log(contactData)

        if (contactData.Owner_Contact){
          submissionData.push(...contactData.Owner_Contact)
        }
        
        if (contactData.Department_Contact){
          submissionData.push(...contactData.Department_Contact)
        }

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
      case 'uploads':
      case 'requests':
        for (let i = 0; i < steps_keys[step].length; i++) {
          const key = steps_keys[step][i];
          // check if the value exists
          if (data.upload_info[key] === undefined || data.upload_info[key] === null) {
            continue;
          }

          if (step === 'uploads' && uploads_original_names[key] !== undefined) {
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
    console.log(currentSteps)
    for (let i = 0; i < currentSteps.length; i++) {
      console.log(currentSteps[i])
      const stepData = getStepData(currentSteps[i]);
      let response = ''
      if (currentSteps[i] === 'uploads') {
        response = await ApplicationApi.SaveProgressUploads(token, stepData)
        response = response.data
      } else {
        response = await ApplicationApi.SaveProgress(token, currentSteps[i], stepData)
      }

      setIsDialogOpen(true)
      console.log(response)
      if (response.success !== 1) {
        setDialogContent(response.message)
        return false
      }else{
        setDialogContent("Your progress has been saved successfully")
      }
    }

    let response = await ApplicationApi.UpdateTime(token, currentTimerValue[0], { time_spent: currentTimerValue[1] })
    console.log(response)

    return true
  };

  const handleFinishClick = async () => {
    // check if agreement is checked
    if (data.upload_info['confirm_info'] !== "yes") {
      setIsDialogOpen(true)
      setDialogContent("Please agree to the terms and conditions")
      return false
    }
    const response = await ApplicationApi.Finish(token)
    console.log(response)

    setIsDialogOpen(true)
    if (response.success !== 1) {
      setDialogContent(response.message)
      return false
    }else{
      setDialogContent("Form has been submitted successfully, you will receive an email shortly")
    }
  }

  const LoadSavedProgress_Parent = async () => {
    const loadedData = await LoadSavedProgress(token);
    if (loadedData != data){
      setData(loadedData)
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
            <Link to="/">
              <FormStyles.FormLogo src={require("./images/bidfood-logo.png")} alt="Logo" />
            </Link>
          </FormStyles.FormHeader>
          <FormStyles.FormDivider />
          <div>
            <FormStyles.FormName>
              BidFood Request Form
            </FormStyles.FormName>

            <FormStyles.FormDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit</FormStyles.FormDescription>
          </div>
          <FormStyles.FormStepContainer>
            <Dialog handleDialogPopUp={isDialogOpen} dialogContent={dialogContent} setIsDialogOpen={setIsDialogOpen}></Dialog>
            <div className={`customContainer`}>
              <FormStyles.FormStep active={currentStep >= 1} className={`${currentStep === 1 ? "active" : ""}`}>
                <div className="step-number"> {currentStep < 2 ? '1' : <CheckIcon />}</div>
                <div className="step-name">General Information</div>
                {/* <div className={`form-step-divider`} /> */}
              </FormStyles.FormStep>
              <FormStyles.FormStep active={currentStep >= 2} className={`${currentStep === 2 ? "active" : ""}`}>
                <div className="step-number">{currentStep < 3 ? '2' : <CheckIcon />}</div>
                <div className="step-name">Contact</div>
                {/* <div className={`form-step-divider`} /> */}
              </FormStyles.FormStep>
              <FormStyles.FormStep active={currentStep >= 3} className={`${currentStep === 3 ? "active" : ""}`}>
                <div>
                  <div className="step-number">{currentStep < 4 ? '3' : <CheckIcon />}</div>
                  <div className="step-name">Upload</div>
                  {/* <div className={`form-step-divider`} /> */}
                </div>
              </FormStyles.FormStep>
            </div>
          </FormStyles.FormStepContainer>

          <FormStyles.FormStepCard>
            {/* <FormStyles.FormStepName>General Information</FormStyles.FormStepName>
                <FormStyles.FormStepDescription>Let's begin by filling out your general information</FormStyles.FormStepDescription> */}

            {/* if current step is 1, show the GeneralInfoComponent and stat generalcounter also do not make it count from 0 again*/}


            {currentStep === 1 && isDataLoaded && <><GeneralInfoComponent handleOnDataChange={handleOnDataChange} /> <Timer onTimerChange={handleOnGeneralTimerChange} startFrom={generalTimerValue} /></>}
            {currentStep === 2 && isDataLoaded && <><ContactComponent handleOnDataChange={handleOnDataChange} /> <Timer onTimerChange={handleOnContactTimerChange} startFrom={contactTimerValue} /></>}
            {currentStep === 3 && isDataLoaded && <><UploadComponent handleOnDataChange={handleOnDataChange} /> <Timer onTimerChange={handleOnUploadTimerChange} startFrom={uploadTimerValue} /></>}

          </FormStyles.FormStepCard>

          <FormStyles.FormFooter>
            {/* if current step is 1, disable the back button */}
            {currentStep !== 1 && <FormStyles.FormButton className={`border_btn`} onClick={handleBackClick}>Previous</FormStyles.FormButton>}
            {/* if current step is 4, don't show the next button */}
            {currentStep !== 3 && <FormStyles.FormButton onClick={handleNextClick}>Next</FormStyles.FormButton>}
            <FormStyles.FormButton onClick={handleSaveClick}>Save</FormStyles.FormButton>
            {/* if current step is 4, show Finish button*/}
            {currentStep === 3 && <FormStyles.FormButton onClick={handleFinishClick}>Finish</FormStyles.FormButton>}
          </FormStyles.FormFooter>
        </FormStyles.FormContainer>
      </FormStyles.Container>
    </>
  );
};

export default Form;