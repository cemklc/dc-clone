const FriendInvitation = require("../../models/friendsInvitation");
const User = require("../../models/user");

const friendsUpdates = require('../../socketHandlers/updates/friends');


const postAccept = async (req, res) => {
    try {
        const { id } = req.body;

        const invitation = await FriendInvitation.findById(id);

        if (!invitation) {
            return res.status(401).send("Error occured. Invitation not found.");
        }

        const { senderId, receiverId } = invitation;

        //add friends to both users

        const senderUser = await User.findById(senderId);

        senderUser.friends = [...senderUser.friends, receiverId];

        const receiverUser = await User.findById(receiverId);

        receiverUser.friends = [...receiverUser.friends, senderId];

        await senderUser.save();
        await receiverUser.save();

        // delete the invitation

        await FriendInvitation.findByIdAndDelete(id);

        // update the list of pending invitations

        friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

        // update the list of friends in the dashboard
        friendsUpdates.updateFriends(senderId.toString());
        friendsUpdates.updateFriends(receiverId.toString());


        return res.status(200).send('Friend invitation accepted!');

    } catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong when accepting the friend invitation.')

    }
};



module.exports = postAccept;