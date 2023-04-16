
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export const LabelStyle = makeStyles({
  label: {
    fontWeight: '600',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    marginTop: '3rem',
    textAlign: 'left'
  },
});

export const UploadLabelStyle = makeStyles({
  label: {
    fontWeight: 500,
    fontSize: '1.1rem',
    marginBottom: '1rem',
    marginTop: '0.5rem',
    textAlign: 'left'
  },
});

export const FormStepName = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: -0.6rem;
  text-align: center;
  color:#232323;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FormStepDescription = styled.p`
  font-size: 1rem;
  color:#808080;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight:400;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CustomInputLabel = styled.label`
  display:inline-block;
  color:#b3b3b3; 
  margin-top: 8px; 
  font-weight: normal;
  font-size: 14px;  
`;

export const InputTitle = styled.h6`
font-weight:500;
font-size:18px;
margin-bottom:0;
margin-top:5px;
padding:0;
`;

export const BlockTitle = styled.h2`
  font-weight:500;
  font-size:18px;
  margin-bottom:0;
  margin-top:5px;
  padding:0;
`;

export const BlockDescription = styled.h2`
  font-weight:normal;
  font-size: 1rem;
  margin-bottom:0;  
  color:#a8a6a6;
  padding:0;
`;

export const ContactSecWrapper = styled.section`
  .MuiPaper-root{
    box-shadow:none !important;
    padding-bottom:2px;
  }
`;

export const ContentWrapper = styled.div`
  margin:0 25px;
`;
export const CustomTable = styled.table`
  width:100%;
  border-collapse: collapse;  
  th,
  td{
    border:1px solid #e2e2e2 !important;    
    font-size:16px;
    padding:0;
    margin:0;

    .MuiFormControl-root{
      margin:0 !important;
    }

    input,
    select{
      height:auto  !important;
      font-size:16px;
      line-height:1;
      padding:15px 10px;
    }
    .MuiSelect-select{
      padding:15px 10px;
    }
    fieldset{
      border:none !important;
      font-size:16px;
    }

    &.cell_bg,
    &.cell_bg div{
      background-color:#e5ebff;
      font-weight: 500 !important;
      color: rgba(0, 0, 0, 0.87) !important;

      input{
        -webkit-text-fill-color: rgba(0, 0, 0, 0.87) !important;
      }
    }

    &.MuiTableCell-alignCenter{
      text-align:center;
      input{
        text-align:center;
      }
    }
    &.MuiTableCell-alignRight{
      text-align:right;
      input{
        text-align:right;
      }
    }
  }
  thead{
    th{
      background-color:#e5ebff;
      padding:15px 10px;
    }
  }  
  tbody{
    td,th{
      // padding:12px 10px;
    }
  }
  tfoot{
    td{
      border:none !important;
    }
  }
  .addBtn,
  .addBtn:hover{
    display:inline-flex;
    align-items:center;
    width:100%;
    background:#f9f9f9;
    color:#9c9c9c;
    line-height:1;
    padding:12px;
    border-radius:4px;
    border:1px solid #f9f9f9;
    box-shadow:none;
    border-top-left-radius:0;
    border-top-right-radius:0;

    &.mt_5{
      margin-top:5px;      
    }
  }
`;
export const FileUploadWrapper = styled.div`
.hjOSqT  {
  position:relative !important;
  background-color: #ff0000 !important;
  width:200px !important;
}
.size_timeLeft_info{
  color:#adadad;
  margin:0;
  font-size:13px;
  font-weight:300;
}
.progressBar{
  .MuiLinearProgress-root{
    height: 6px;    
    background-color: #efefef;
    border-radius: 5px;

    .MuiLinearProgress-bar{
      background-color: #34d24d;
    }
  }  
}

`;
export const CustomFileUploadLabel = styled.div`
  width:100%;
  padding:25px 40px;
  background-color:#f5f9fc;
  box-sizing: border-box;
  border-radius:5px;
  border:1px dashed #3080eb;
  text-align:center;
  cursor:pointer;

  .iconWrapper{
    width:60px;
    height:60px;
    border-radius:50%;
    background-color:#e4eefa;
    overflow:hidden;
    margin:0 auto;
    padding:15px;
    box-sizing:border-box;
    margin-bottom:7px;
    display:inline-flex;
    align-items:center;
    justify-content:center;

    img{
      display:block;              
    }
  }
  .content_sp{
    display:block;
    color:#7f7f7f;
    font-weight:400;
    font-size:15px;

    .link_sp{      
      color:#3080eb;
    }
    .max_content{
      display:block;
      color:#989898;
      font-weight:400;
      font-size:14px;
    }
  }
`;
export const FileName = styled.div`
  display:inline-flex;
  justify-content:space-between;
  width:100%;
  margin:10px 0 5px 0;

  input{
    padding:0;
    border:0 !important;
    font-size:14px;
    font-weight:400;
    color:#a8a6a6;
  }
  fieldset{
    border:0 !important;
  }
  .action_btns{
    display:inline-flex;
    align-items:center;
    
    .fileName_edit{
      display:inline-flex;
      color:#627cd8;
      cursor:pointer;      
      line-height:1;
      svg,i{
        font-size:15px;
      }
    }
    .fileDelete_edit{
      display:inline-flex;
      color:#ff0000;
      cursor:pointer;
      line-height:1;  
      svg,i{
        font-size:18px;
      }
    }

    * + * {
      margin-left:8px;
    }
  }  
`;