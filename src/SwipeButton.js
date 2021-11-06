import React from 'react'
import './SwipeButton.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';

function SwipeButton() {
    return ( <
        div className = 'swipeButton' >
        <
        IconButton className = 'swipeButton_repeat' >
        <
        ReplayIcon fontSize = 'large' / >
        <
        /IconButton>  <
        IconButton className = 'swipeButton_left' >
        <
        CloseIcon fontSize = 'large' / >
        <
        /IconButton> <
        IconButton className = 'swipeButton_star' >
        <
        StarIcon fontSize = 'large' / >
        <
        /IconButton> <
        IconButton className = 'swipeButton_right' >
        <
        FavoriteIcon fontSize = 'large' / >
        <
        /IconButton> <
        IconButton className = 'swipeButton_lightning' >
        <
        FlashOnIcon fontSize = 'large' / >
        <
        /IconButton> <
        /div>
    )
}

export default SwipeButton;