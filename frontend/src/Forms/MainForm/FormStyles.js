import styled from 'styled-components';

export const Container = styled.div`
  background-color: #677ddb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing:border-box;

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
  box-sizing: border-box;

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
    margin-bottom: 2rem;
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
`;

export const FormButton = styled.button`
  display:block;
  background-color: #e5ebff;
  color: #627cd8;  
  border-radius: 5px;
  border: none;
  font-size: 1.13rem;
  font-weight: 550;
  margin-right: 1.5rem;
  transition: all 0.3s ease-in-out;
  cursor:pointer;
  min-width:230px;
  padding:17px 40px;
  border:2px solid transparent;
  box-sizing:border-box;  

  a{
    text-decoration:none !important;
    width:100%;
    height:100%;
    padding:17px 40px;
    box-sizing: border-box;
    &:hover{
      text-decoration:none !important;
    }
  }
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

  &.lg_btn{
    margin:0 auto;
    background-color:#fff;  
    color:#627CD8;  
    box-shadow: 0px 1px 14px rgba(98, 124, 216, 0.29);
    border-radius: 8px;
    border:4px solid transparent;
    min-width:500px;    
    box-sizing:border-box;
    padding:0;
    a{
      display:inline-block;
      padding:25px 30px !important;
      box-sizing: border-box;
    }

    &:hover{
      background: #E5EBFF;
      border: 4px solid rgba(98, 124, 216, 0.52);            
      box-shadow: 0px 1px 14px rgba(98, 124, 216, 0.29);      
    }
    &:not(:first-child){
      margin-top:25px !important;
    }
    &:last-child{
      margin-bottom:50px !important;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
    margin-right: 0.5rem;
    &.lg_btn{
      min-width:230px;
      a{
        padding:15px 25px !important;
      }
      &:last-child{
        margin-top:30px !important;
        margin-bottom:30px !important;
      }
    }    
  }
`;
export const FormCustomContainer = styled.div`
  width:90%;
  margin:0 auto;  

`;
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
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight:500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

