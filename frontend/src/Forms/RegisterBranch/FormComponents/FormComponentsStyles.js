
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export const LabelStyle = makeStyles({
    label: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      marginBottom: '1rem',
      marginTop: '3rem',
      textAlign: 'left'
    },
});

export const UploadLabelStyle = makeStyles({
  label: {
    fontWeight: 450,
    fontSize: '1rem',
    marginBottom: '1rem',
    marginTop: '1rem',
    textAlign: 'left'
  },
});

export const FormStepName = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: -0.6rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FormStepDescription = styled.p`
  font-size: 1rem;
  color: #999;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;