import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';

import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import InputWithLabel from '../../shared/components/InputWithLabel';
import { validateMail } from '../../shared/utils/validators';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => { }
}) => {

    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');
    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail,
        },
        handleCloseDialog);
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail))
    }, [mail, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} >
                <DialogTitle>
                    <Typography> Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>Enter email addres of a friend to intive</Typography>
                        <InputWithLabel
                            label='Mail'
                            type='text'
                            value={mail}
                            setValue={setMail}
                            placeholder='Enter mail address'
                        />
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label='Send'
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px',
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);