import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
import { validateRegisterForm } from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({register}) => {

    const history = useNavigate();
    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        setIsFormValid(validateRegisterForm({ mail, password, username }));
    }, [mail, password, username, setIsFormValid]);



    const handleRegister = () => {
        console.log(mail, password, username)
        console.log('Registering!');

        const userDetails = {
            mail,
            password,
            username,
        };
        register(userDetails, history);
    };

    return (
        <AuthBox>
            <RegisterPageHeader />
            <RegisterPageInputs
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
                username={username}
                setUsername={setUsername}
            />
             <RegisterPageFooter
                isFormValid={isFormValid} handleRegister={handleRegister}
            /> 
        </AuthBox>
    );
};


const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    };
};

export default connect(null, mapActionsToProps)(RegisterPage);