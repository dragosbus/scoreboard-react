import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
    return (
        <header className="header">
        <Stats players={props.players}/>
        <h1>Scoreboard</h1>
        <Stopwatch/>
        </header>
    );
};

export default Header;