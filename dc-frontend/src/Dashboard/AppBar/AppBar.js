import React from 'react';
import { styled } from '@mui/system';
import DropdownMenu from './DropdownMenu';


const MainContainer = styled('div')({
    position: "absolute",
    right: "0",
    top: "0",
    height: "48px",
    backgroundColor: "#36393f",
    width: "calc(100% - 326px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    borderBottom: "1px solid black"
});



const AppBar = () => {
    return (
        <MainContainer>
            {/* <UserInfo /> */}
            <DropdownMenu />
        </MainContainer>
    );
};

export default AppBar;