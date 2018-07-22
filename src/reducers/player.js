import * as PlayerActionTypes from '../actionTypes/player';

const initialState = [
    {
        name: "Dragos",
        score: 32,
        id:1
    },
    {
        name: "Mihail",
        score: 31,
        id:2
    },
    {
        name: "John",
        score: 44,
        id:3
    }
];

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return [...state, 
                {name: action.name, score: 0}
            ];
        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return state.map((player,index) => {
                if(index === action.index) {
                    return {
                        name: player.name,
                        score: player.score + action.score
                    };
                }
                return player;
            });
        default:
            return state;
    }
};

export default playerReducer;