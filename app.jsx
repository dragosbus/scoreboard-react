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

const App = props => {
    return (
        <div className="scoreboard">
            <Header title="ScoreBoard" />
            <div className="players">
                {props.players.map(player => <Player name={player.name} score={player.score} key={player.id}/>)}
            </div>
        </div>
    );
};

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
            <CounterAction/>
        </div>
    );
};

const CounterAction = React.createClass({
    propTypes: {},

    getInitialState() {
        return {
            score: 0
        }
    },

    incrementScore(e) {
        this.setState({
            score: (this.state.score + 1)
        })
    },

    decrementScore(e) {
        this.setState({
            score: this.state.score <= 0 ? 0 : (this.state.score - 1)
        })
    },

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
        );  
    }
});

Header.propTypes = {
    title: React.PropTypes.string
};

App.propTypes = {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id:React.PropTypes.number.isRequired
    })).isRequired
};

ReactDOM.render(
    <App players={Players}/>,
    document.getElementById("container")
);
