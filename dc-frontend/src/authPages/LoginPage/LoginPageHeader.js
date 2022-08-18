import React from 'react';
import { Typography } from '@mui/material';


const LoginPageHeader = () => {
    return (
        <>
            <Typography variant = 'h4' sx={{color: 'white'}}>
                Welcome Back!
            </Typography>
            <Typography sx={{color: '#b9bbbe'}}>
                Connect with peers around the world!
            </Typography>
            
        </>
    );
};

export default LoginPageHeader;