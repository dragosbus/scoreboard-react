import React, {Component} from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

const Players = [
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: Players
        }
    }

    onScoreChange(index, delta) {
        this.state.players[index].score += delta;
        this.setState(this.state); 
    }

    onAddPlayer(name) {
        this.state.players.push({name: name, score: 0});
        this.setState(this.state);
    }

    onRemovePlayer(index) {
        this.state.players.splice(index, 1);
        this.setState(this.state);
    }

    render() {
        return(
            <div className="scoreboard">
                <Header players={this.state.players}/>
            </div>
        );
    }
}


export default App;
