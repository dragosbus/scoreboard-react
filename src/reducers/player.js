import * as PlayerActionTypes from '../actionTypes/player';

const initialState = {
    players: [
        {
            name: "Dragos",
            score: 32,
            id:1,
            created: '11/12/2018',
            updated: '22/12/2018'
        },
        {
            name: "Mihail",
            score: 31,
            id:2,
            created: '11/12/2018',
            updated: '22/12/2018'
        },
        {
            name: "John",
            score: 44,
            id:3,
            created: '11/12/2018',
            updated: '22/12/2018'
        }
    ],
    selectedIndex: -1
};

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return {
                players: [...state.players, 
                    {name: action.name, score: 0}
                ],
                selectedIndex: -1
            };
        case PlayerActionTypes.REMOVE_PLAYER:
            return {
               players: [
                ...state.players.slice(0, action.index),
                ...state.players.slice(action.index + 1)
            ],
               selectedIndex: -1
            };
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            let players = state.players.map((player,index) => {
                if(index === action.index) {
                    return {
                        name: player.name,
                        score: player.score + action.score
                    };
                }
                return player;
            });
            return {
                players: players,
                selectedIndex: -1
            }
        case PlayerActionTypes.SHOW_DETAILS:
            return {
                players: state.players,
                selectedIndex: action.index
            };
        default:
            return state;
    }
};

export default playerReducer;