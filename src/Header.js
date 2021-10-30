import React from 'react'
import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import tinder_logo from './tinder-logo.png'
import ForumIcon from '@mui/icons-material/Forum'

function Header() {
    return ( <
        div className = 'header' >
        <
        IconButton >
        <
        PersonIcon fontSize = "large"
        className = "header_icon" / >
        <
        /IconButton> <
        img className = 'header_logo'
        src = { tinder_logo }
        />

        <
        IconButton >
        <
        ForumIcon fontsize = "large"
        className = "header_icon" / >
        <
        /IconButton>


        <
        /div>
    );
}

export default Header;