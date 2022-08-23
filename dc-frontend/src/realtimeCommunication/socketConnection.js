import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    
    socket = io('http://localhost:3002', {
        auth: {
            token: jwtToken,
        }
    });

    socket.on('connect' , () => {
        console.log('successfully connected with socket.io server');
        console.log(socket.id);
    });
};