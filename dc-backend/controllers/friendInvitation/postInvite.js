const User = require("../../models/user");
const FriendInvitation = require('../../models/friendsInvitation');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postInvite = async (req, res) => {
    const { targetMailAddress } = req.body;

    console.log(targetMailAddress);
    const { userId, mail } = req.user; // jwt decoded token is attached to req.user in auth.js 

    // check if target is not self

    if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
        return res.status(409).send("Can't invite your own email address.")
    }

    const targetUser = await User.findOne({
        mail: targetMailAddress.toLowerCase(),
    });

    if (!targetUser) {
        return res.status(404).send(`Friend with email: ${targetMailAddress} has not been found.`);
    }

    // check invitation is already been sent
    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser._id,
    });

    if (invitationAlreadyReceived) {
        return res.status(409).send(`Invitation has been already sent to: ${targetMailAddress}`)
    }

    const usersAlreadyFriends = targetUser.friends.find(
        (friendId) => friendId.toString() === userId.toString()
    );

    if (usersAlreadyFriends) {
        return res.status(409).send("This friend is already added");
    }

    // create new invitation to database


    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id,
    });

    // if the other user is online update their pending invitation list

    // send pending invitations update to specific user

    friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());


    return res.status(201).send(`Invitation has been send to: ${targetMailAddress} `)
};

module.exports = postInvite;