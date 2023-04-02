import styled from 'styled-components';

export const Container = styled.div`
  background-color: #677ddb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  max-width: 60rem;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
    padding: 1rem;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const FormLogo = styled.img`
  height: 100px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    height: 80px;
    margin-right: 0.5rem;
  }
`;

export const FormDivider = styled.div`
  height: 1px;
  margin-bottom: 3rem;
  background-image: linear-gradient(to right, #ccc 50%, transparent 0%);
  background-size: 15px 1px;
  background-repeat: repeat-x;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const FormName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const FormButton = styled.button`
  background-color: #e6ebff;
  color: #6f84dd;
  padding: 1rem 4rem;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  font-weight: 550;
  margin-right: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #6f84dd;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
    margin-right: 0.5rem;
  }
`;

// export const FormButtonDisabled = styled(FormButton)`
//   background-color: #ccc;
//   cursor: not-allowed;
//   color: #999;
//   &:hover {
//     background-color: #ccc;
//     color: #999;
//   }
// `;

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FormDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

export const FormStepContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .form-step-divider {
    width: 1.5rem;
    height: 0.2rem;
    background-color: ${props => props.active ? '#6f84dd' : '#dddddd'};
    margin-top: 1.4rem;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    flex-shrink: 0;
    transition: background-color 0.3s ease;
  }

  .form-step-divider.active {
    background-color: #6f84dd;
  }

  /* Add styles for the dashed lines */
  &:before {
    content: '';
    width: calc(10rem - 4px);
    height: 2px;
    border-top: 2px dashed #ccc;
    position: absolute;
    left: calc(10rem + 1.5rem);
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }

  &:first-child:before {
    display: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    .form-step-divider {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      height: 1rem;
      width: 0.2rem;
      margin-left: 0;
      margin-right: 0;
    }

    &:before {
      width: 2px;
      height: calc(10rem - 4px);
      border-top: 2px dashed #ccc;
      left: 50%;
      top: calc(10rem + 1.5rem);
      transform: translateX(-50%);
    }
  }
`;

export const FormStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  width: 10rem;
  flex-shrink: 0;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  .step-number {
    width: 3rem;
    height: 3rem;
    border-radius: 70%;
    background-color: ${props => props.active ? '#e6ebff' : '#f2f2f2'};
    color: ${props => props.active ? '#6f84dd' : '#dddddd'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: 2px solid ${props => props.active ? '#eaf5ff' : '#f2f2f2'};
  }

  .step-name {
    margin-top: 0.5rem;
    color: ${props => props.active ? '#6f84dd' : '#999'};
    font-size: 0.8rem;
    // text-transform: uppercase;
    text-align: center;
  }

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const FormStepCard = styled.div`
  border: 1px solid #EEEEEE;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  padding-bottom: 5rem;
  margin-bottom: 3rem;
  width: 80%; /* Change the width of the form step card */
  margin: 0 auto; /* Center the form step card horizontally */

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;