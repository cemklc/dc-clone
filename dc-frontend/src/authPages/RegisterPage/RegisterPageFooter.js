import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
    return 'Enter correct e-mail address and password should contain 6-12 characters and username should be between 3-12 characters';
};

const getFormValidMessage = () => {
    return 'Press to log in!';
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate('/login');
    };

    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryButton
                        label='Register'
                        additionalStyles={{ marginTop: '30px' }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text='Already have an account? '
                redirectText='Go to log in page.'
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    );
};

export default RegisterPageFooter;