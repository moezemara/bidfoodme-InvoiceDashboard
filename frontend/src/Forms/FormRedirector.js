import React from 'react';
import { useSearchParams } from 'react-router-dom';
const FormRedirector = () => {

  const [searchParams] = useSearchParams();

  const containerStyle = {
    backgroundColor: '#FFFFFF',
    width: '400px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle = {
    backgroundColor: '#677ddb',
    color: '#FFFFFF',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '16px',
  };

  return (
    <div style={{ backgroundColor: '#677ddb', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={containerStyle}>
        <button style={buttonStyle} onClick={() => window.location.href = `/register-branch?ss=${searchParams.get("ss")}`}>
          Register Branch
        </button>
        <button style={buttonStyle} onClick={() => window.location.href = `/request-credit?ss=${searchParams.get("ss")}`}>
          Request Credit
        </button>
      </div>
    </div>
  );
  
};

export default FormRedirector;