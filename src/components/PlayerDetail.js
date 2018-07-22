import React from 'react';

const PlayerDetail = ({selectedIndex, players}) => {
    if(selectedIndex !== -1) {
        return (
            <div>
                <h3>{players[selectedIndex].name}</h3>
                <ul>
                    <li>
                        <span>Score: </span>
                        {players[selectedIndex].score}
                    </li>
                    <li>
                        <span>Created: </span>
                        {players[selectedIndex].created}
                    </li>
                    <li>
                        <span>Updated: </span>
                        {players[selectedIndex].updated}
                    </li>
                </ul>
            </div>
        );
    } else {
        return <h3>Click an player for more details!</h3>
    }
};

export default PlayerDetail;