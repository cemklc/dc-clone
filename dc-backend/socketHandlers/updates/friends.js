const User = require('../../models/user');
const FriendInvitation = require('../../models/friendsInvitation');

const serverStore = require('../../serverStore');

const updateFriendsPendingInvitations = async (userId) => {
    try {
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId,
        }).populate('senderId', '_id username mail');

        // find if user has active connections

        const receiverList = serverStore.getActiveConnections(userId);

        const io = serverStore.getSocketServerInstance();

        receiverList.forEach(receiverSocketId => {
            io.to(receiverSocketId).emit('friends-invitations', {
                pendingInvitations: pendingInvitations ? pendingInvitations : [],
            });
        });

    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    updateFriendsPendingInvitations,
}