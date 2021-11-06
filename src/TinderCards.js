import { SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import virat_kohli from './virat-kohli.jpg';
import elon_musk from './elon-musk.jpg';
import './TinderCards.css'


function TinderCards() {
    const [people, setPeople] = useState([{
            name: "Virat Kohli",
            url: virat_kohli

        },
        {
            name: "Elon Musk",
            url: elon_musk

        },


    ]);
    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }
    return ( <
        div className = 'tinderCards' >
        <
        div className = 'tinderCards_cardContainer' > {
            people.map((person) => ( <
                TinderCard className = 'swipe'
                key = { person.name }
                preventSwipe = {
                    ['up', 'down'] }
                onSwipe = {
                    (dir) => swiped(dir, person.name) }
                onCardLeftScreen = {
                    () => outOfFrame(person.name) } >
                <
                div style = {
                    { backgroundImage: `url(${person.url})` } }
                className = "card" >
                < h3 > { person.name } < /h3></div >
                <
                /TinderCard>
            ))
        } <
        /div>


        <
        /div>
    );
}

export default TinderCards;