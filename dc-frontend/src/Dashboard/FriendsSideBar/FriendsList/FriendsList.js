import React from 'react';
import { styled } from '@mui/system';
import FrindsListItem from './FrindsListItem';


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
})

const FriendsList = () => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map(f => (
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

export default FriendsList;