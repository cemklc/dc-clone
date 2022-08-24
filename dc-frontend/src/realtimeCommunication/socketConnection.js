import io from 'socket.io-client';
import { sendPendingFriendsInvitations } from '../store/actions/friendsActions';
import store from '../store/store';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;

    socket = io('http://localhost:3002', {
        auth: {
            token: jwtToken,
        }
    });

    socket.on('connect', () => {
        console.log('successfully connected with socket.io server');
        console.log(socket.id);
    });


    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data;

        console.log('friends invitations event came');
        console.log(pendingInvitations);
        store.dispatch(sendPendingFriendsInvitations(pendingInvitations));
    });
};

export const disconnectSocket = () => {
    socket.disconnect();
};