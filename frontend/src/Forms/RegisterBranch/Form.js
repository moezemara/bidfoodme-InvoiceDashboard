import React, { useState } from 'react';
// import { makeStyles } from 'tss-react/mui';
// import { Stepper, Step, StepLabel } from '@mui/material';
import GeneralInfoComponent from './FormComponents/GeneralInfoComponent';
import ContactComponent from './FormComponents/ContactComponent';
import ReferencesComponent from './FormComponents/ReferencesComponent';
import UploadComponent from './FormComponents/UploadComponent';
import * as FormStyles from './FormStyles';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <FormStyles.Container>
      <FormStyles.FormContainer>
        <FormStyles.FormHeader>
            <FormStyles.FormLogo src={require("./images/bidfood-logo.png")} alt="Logo" />
        </FormStyles.FormHeader>
        <FormStyles.FormDivider />
            <div>
                <FormStyles.FormName>BidFood Request Form</FormStyles.FormName>
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

                {/* if current step is 1, show the GeneralInfoComponent */}
                {currentStep === 1 && <GeneralInfoComponent />}
                {currentStep === 2 && <ContactComponent />}
                {currentStep === 3 && <ReferencesComponent />}
                {currentStep === 4 && <UploadComponent />}
                
            </FormStyles.FormStepCard>

            <FormStyles.FormFooter>
                {/* if current step is 1, disable the back button */}
                {currentStep !== 1 && <FormStyles.FormButton onClick={handleBackClick}>Back</FormStyles.FormButton>}
                {/* if current step is 4, don't show the next button */}
                {currentStep !== 4 && <FormStyles.FormButton onClick={handleNextClick}>Next</FormStyles.FormButton>}
                <FormStyles.FormButton>Save</FormStyles.FormButton>
                {/* if current step is 4, show Finish button*/}
                {currentStep === 4 && <FormStyles.FormButton>Finish</FormStyles.FormButton>}
                </FormStyles.FormFooter>
        </FormStyles.FormContainer>
    </FormStyles.Container>
  );
};
  
export default Form;