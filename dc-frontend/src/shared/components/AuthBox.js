import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2'
})


const AuthBox = (props) => {
    return (
        <BoxWrapper>
            <Box 
                sx={{width: 700,
                     height: 400,
                     bgcolor: '#36393f',
                     borderRadius: '5px',
                     boxShadow: '0 3px 15px 0 rgb(200 200 200 / 70%)',
                     display: 'flex',
                     flexDirection: 'column',
                     padding: '25px'}}
            >
                {props.children}
            </Box>
        </BoxWrapper>
    );
};

export default AuthBox;