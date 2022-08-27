import React from 'react';
import { Button, Typography } from '@mui/material';
import { ReactReduxContext } from 'react-redux'
import { useContext } from 'react';

const UserInfo = () => {
    const { store } = useContext(ReactReduxContext)
    let userMail = store?.getState('user')?.auth?.userDetails?.mail;



    return (

        <Typography
            style={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: 'black',
                position: 'relative',
            }}
        >
            <Typography
                style={{
                    marginLeft: '7px',
                    fontWeight: 700,
                    color: '#8e9297',
                }}
                variant='subtitle1'
                align='left'
            >
                User Mail: {userMail ? userMail : ''}
            </Typography>
        </Typography>
    );
};

export default UserInfo;