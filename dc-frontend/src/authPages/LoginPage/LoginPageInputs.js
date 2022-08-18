import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label='E-mail'
                type='text'
                placeholder='E-mail Addres' />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label='Password'
                type='password'
                placeholder='Password' />

        </>
    );
};

export default LoginPageInputs;