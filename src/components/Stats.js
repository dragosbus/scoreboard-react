import React from 'react';

const Stats = props => {
    const playerCount = props.players.length;
    const totalPoints = props.players.reduce((totalPoints, player) => totalPoints + player.score, 0);

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{playerCount}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Stats;