import React from 'react';
import { styled } from '@mui/system';
import FrindsListItem from './FrindsListItem';
import { connect } from 'react-redux';

const DUMMY_FRIENDS = [
    {
        id: 1,
        username: 'Cetka',
        isOnline: true,
    },
    {
        id: 2,
        username: 'Vions',
        isOnline: false,
    },
    {
        id: 3,
        username: 'Fion',
        isOnline: true,
    },
];


const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {



    
    friends.forEach(f => {
        const isUserOnline = onlineUsers.find(user => user.userId === f.id);
        f.isOnline = isUserOnline ? true : false;
    });

    return friends;
}

const FriendsList = ({ friends, onlineUsers }) => {
    return (
        <MainContainer>
            {checkOnlineUsers(friends, onlineUsers).map(f => (
                <FrindsListItem
                    username={f.username}
                    id={f.id}
                    key={f.id}
                    isOnline={f.isOnline}
                />
            ))}
        </MainContainer>
    );
};


const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends,
    }
};

export default connect(mapStoreStateToProps)(FriendsList);