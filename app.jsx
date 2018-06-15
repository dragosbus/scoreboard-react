
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
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
            ]
        }
    }

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
}

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
            <button className="counter-action decrement" onClick={()=> props.onChange(-1)}>-</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment" onClick={()=> props.onChange(1)}>+</button>
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

ReactDOM.render(
    <App />,
    document.getElementById("container")
);
