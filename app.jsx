
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: "Dragos",
                    score: 1,
                    id:1
                }
            ]
        }
        this.onScoreChange = this.onScoreChange.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    onScoreChange(index, delta) {
        let user = this.state.players[index];
        delta === -1 && user.score <= 0 ? user.score = 0 : user.score+=delta;
        this.state.players.splice(index, 1, user)
        this.setState({
            players: this.state.players
        });
    }

    addPlayer(name) {
        let newPlayer = {
            name: name,
            score: 0,
            id: this.state.players[this.state.players.length - 1].id + 1
        }
        this.setState(prevState=>{
            return{
                players: prevState.players.concat(newPlayer)
            }
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="ScoreBoard" />
                <div className="players">
                    {this.state.players.map((player, index) => {
                        return (
                            <Player
                                onScoreChange={delta=>this.onScoreChange(index, delta)}
                                name={player.name}
                                score={player.score}
                                key={player.id} />
                        );
                    })}
                </div>
                <AddPlayer addPlayer={this.addPlayer}/>
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

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer(e) {
        e.preventDefault();
        this.props.addPlayer(this._name.value);
    }

    render() {
        return (
            <form className="add-player-form" onSubmit={this.addPlayer}>
                <input ref={name=>this._name=name} type="text" placeholder="Player Name"/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

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
