import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = ({ mail, setMail, password, setPassword, username, setUsername }) => {
    return (
        <>
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label='Username'
                type='text'
                placeholder='Enter username' />
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
                placeholder='Enter password' />
        </>
    );
};

export default RegisterPageInputs;