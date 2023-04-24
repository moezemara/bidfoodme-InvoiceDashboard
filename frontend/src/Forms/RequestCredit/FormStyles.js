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
  max-width: 66rem;
  width: 100%;
  box-sizing: border-box;s
  
  @media (max-width: 1199px) {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    max-width: 100%;    
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
    margin-bottom: 1rem;
  }
`;

export const FormName = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;  

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 575px) {
    font-size: 1.4rem;    
  }
  @media (max-width: 360px) {
    font-size: 1.3rem;    
  }
`;

export const FormButton = styled.button`
  background-color: #e5ebff;
  color: #627cd8;
  padding: 1rem 4rem;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: 550;  
  transition: all 0.3s ease-in-out;
  cursor:pointer;
  min-width:190px;
  border: 1px solid transparent;
  box-sizing:border-box;

  &:hover {
    background-color: #6f84dd;
    color: #fff;
  }
  &.border_btn{
    background-color:transparent;
    border:1px solid #627cd8;

    &:hover{
      background-color: #6f84dd;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.7rem 2rem;    
    min-width:125px;
  }  

  @media (max-width: 480px) {
    padding: 0.6rem 1.3rem;   
    min-width:100px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
  grid-gap:15px 30px;
  flex-wrap:wrap;

  @media (max-width: 768px) {  
    grid-gap:15px;
  }
  @media (max-width: 480px) {  
    margin-top:20px; 
  }
`;

export const FormDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight:500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

export const FormStepContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .customContainer{
    width:90%;
    display: flex;
    justify-content: space-between;
    margin:0 auto;

    @media screen and (max-width: 768px) {
      width:100%;
      flex-wrap:wrap;      
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.4rem;
    
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
  flex-shrink: 0;
  position: relative;
  width:150px;

  &:last-child {
    margin-right: 0;    
  } 

  .step-number {    
    position:relative;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 70%;   
    display: -webkit-box;   
    display: -ms-flexbox;   
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 1.2rem;
    background-color: #e4fbe8;
    color:#34d24d;    

    @media (max-width: 1199px) {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1rem;
    }
    
  }
  &:not(:last-child){
    &:after{
      content: '';
      width: 75%;      
      border-top: 2px dashed #34d24d;
      position: absolute;
      left: 92%;
      top: 1.6rem;
      -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
              transform: translateY(-50%); 
              
      @media (max-width: 1199px) {
        width:calc(100vh - 93vh);
        top: 1.2rem;
      } 
      @media screen and (max-width: 525px) {
       display:none;
      }
    }        
  }
  
  .step-name {
    margin-top: 0.5rem;    
    font-size: 0.9rem;
    text-align: center;
    color:#34d24d;

    @media screen and (max-width:480px) {
      font-size: 0.7rem;
    }
  }


  // Active Step
  &.active{
    .step-number{
      background-color:#e5ebff;
      color: #627cd8;    
    }
    &:after{
      border-color:#627cd8;
    }
    .step-name{
      color:#627cd8;
    }
  }     

  // Uncheck Step 
  &.active ~ &{    
    .step-number{
      background-color: #f9f9f9;
      color: #d8d8d8;
    }
    &:after{
      border-color:#d8d8d8;
    }                
  }
  &.active ~ & .step-name{
    color:#d8d8d8;
  }


  /* Responsive styles */
  @media screen and (max-width: 768px) {
    width:100px;    
  }
  @media screen and (max-width:480px) {
    width:55px;    
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
  @media screen and (max-width: 900px) {

    padding: 1rem 1.8rem;
    box-sizing:border-box;
    width:90%;
    
    .general_sec .MuiGrid-container,
    .reference_sec .MuiGrid-container{
      grid-gap:0 24px;
    }
    .upload_sec .MuiGrid-container{
      grid-gap:15px 24px;
    }
    .general_sec .MuiGrid-grid-sm-6,
    .general_sec .MuiGrid-grid-xs-6,
    .reference_sec .MuiGrid-grid-sm-6,
    .reference_sec .MuiGrid-grid-xs-6,
    .upload_sec .MuiGrid-grid-xs-6,
    .upload_sec .MuiGrid-grid-sm-6{
      flex-basis:calc(50% - 12px);      
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    box-sizing:border-box;    
    padding: 1rem 1.2rem;

    .general_sec .MuiOutlinedInput-input,
    .reference_sec .MuiOutlinedInput-input,
    .upload_sec .MuiOutlinedInput-input{
      height:12px;
      display:inline-flex;
      align-items:center;
      min-height:initial !important;
    }

    .general_sec .tblTop_title,
    .reference_sec .tblTop_title,
    .upload_sec .tblTop_title{
      margin-top:30px;
      line-height:1;
      font-size:18px;
    }
    .general_sec .tbl_title, 
    .reference_sec .tbl_title,
    .upload_sec .tbl_title{
      margin-top:40px !important;
      line-height:1;
      font-size:18px;
    }
    .upload_sec .res_block_upload {
      display:block !important;
    }
  }
  @media screen and (max-width: 575px) {    
    
    .general_sec .MuiGrid-container,
    .reference_sec .MuiGrid-container{
      grid-gap:0;
    }
    .general_sec .MuiGrid-grid-sm-6,
    .general_sec .MuiGrid-grid-xs-6,
    .reference_sec .MuiGrid-grid-sm-6,
    .reference_sec .MuiGrid-grid-xs-6,
    .upload_sec .MuiGrid-grid-sm-6,
    .upload_sec .MuiGrid-grid-xs-6{
      flex-basis:100%;      
    }    

    .general_sec .MuiOutlinedInput-input,
    .reference_sec .MuiOutlinedInput-input{
      height:8px;
    }   
  }
`;