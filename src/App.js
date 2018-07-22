import React from 'react';

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

const App = React.createClass({

    propTypes: {
        initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            score: React.PropTypes.number.isRequired,
            id: React.PropTypes.number.isRequired
        })).isRequired
    },

    getInitialState() {
        return {
            players: this.props.initialPlayers
        };
    },

    onScoreChange(index, delta) {
        console.log(index, delta);
        this.state.players[index].score += delta;
        this.setState(this.state);
    },

    render() {
        return (
            <div className="scoreboard">
                <Header title="ScoreBoard" />
                <div className="players">
                    {this.state.players.map(player => {
                        return (
                            <Player
                                onScoreChange={function (index,delta) { this.onScoreChange(index, delta)}}
                                name={player.name}
                                score={player.score}
                                key={player.id} />
                        );
                    })}
                </div>
            </div>
        );
    }
});

const Header = props => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    );
};

const Player = props => {
    return (
        <div className="player">
            <div className="player-name">{props.name}</div>
            <CounterAction score={props.score} onChange={props.onScoreChange}/>
        </div>
    );
};


const CounterAction = props => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={function() {props.onChange(-1)}}>-</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment" onClick={function () { props.onChange(1) }}>+</button>
        </div>
    );  
};

CounterAction.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};

Header.propTypes = {
    title: React.PropTypes.string
};

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired
};

export default App;
