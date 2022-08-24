const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
var logger = require('morgan');

require('dotenv').config();


const socketServer = require('./socketServer');
const authRoutes = require('./routes/authRoutes');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use("/api/auth", authRoutes);
app.use('/api/friend-invitations', friendInvitationRoutes);
const server = http.createServer(app);
socketServer.registerSocketServer(server);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    server.listen(PORT, () =>{
        console.log(`Server is listening on ${PORT}`);
    });
})
.catch(err => {
    console.log('Database connection failed. Server is not started');
    console.log(err);
});