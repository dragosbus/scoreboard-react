import React from 'react';

const PlayerDetail = ({}) => {
    if() {
        return (
            <div>
                <h3>{}</h3>
                <ul>
                    <li>
                        <span>Score: </span>
                        {}
                    </li>
                    <li>
                        <span>Created: </span>
                        {}
                    </li>
                    <li>
                        <span>Updated: </span>
                        {}
                    </li>
                </ul>
            </div>
        );
    } else {
        return <h3>Click an player for more details!</h3>
    }
};