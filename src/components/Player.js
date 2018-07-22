import React from 'react';
import Counter from './Counter';

const Player = props =>{
    return(
        <div className="player">
            <div className="player-name">
                <a className="remove-player" onClick={()=> props.removePlayer(props.index)}>x</a>
                <span onClick={()=>props.showDetail(props.index)}>{props.name}</span>
            </div>
            <div className="player-score">
                <Counter
                    index={props.index}
                    updatePlayerScore={props.updatePlayerScore}
                    score={props.score}
                />
            </div>
        </div>
    );
};


export default Player;