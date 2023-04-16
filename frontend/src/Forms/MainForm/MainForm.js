import * as React from 'react';
import * as FormStyles from './FormStyles';
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

const MainForm = () => {
    const [searchParams] = useSearchParams();

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
                        <FormStyles.FormDescription>Welcome to BidFood form!  please select an option.</FormStyles.FormDescription>
                    </div>
                    <FormStyles.FormCustomContainer>
                        <FormStyles.FormButton className='lg_btn' onClick={() => window.location.href = `/request-credit?ss=${searchParams.get("ss")}`}><Link>Request a credit limit</Link></FormStyles.FormButton>
                        <FormStyles.FormButton className='lg_btn' onClick={() => window.location.href = `/register-branch?ss=${searchParams.get("ss")}`}><Link>Register a new branch</Link></FormStyles.FormButton>
                    </FormStyles.FormCustomContainer>
                </FormStyles.FormContainer>
            </FormStyles.Container>
        </>
    );
}
export default MainForm;
