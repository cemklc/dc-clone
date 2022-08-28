const FriendInvitation = require("../../models/friendsInvitation");
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postReject = async (req, res) => {
    try {
        const { id } = req.body;
        const { userId } = req.user;
        // check if that invitation exists in the db
        const invitationExists = await FriendInvitation.exists({ _id: id });

        if (invitationExists) {
            await FriendInvitation.findByIdAndDelete(id);
        }

        friendsUpdates.updateFriendsPendingInvitations(userId);

        return res.status(200).send('Invitation rejected!')
    } catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong when rejecting the friend invitation.')
    }


};



module.exports = postReject;