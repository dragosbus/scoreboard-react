
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
        this.removePlayer = this.removePlayer.bind(this);
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
            id: this.state.players[this.state.players.length - 1] ? 
            this.state.players[this.state.players.length - 1].id + 1 : 1
        }
        this.setState(prevState=>{
            return{
                players: prevState.players.concat(newPlayer)
            }
        });
    }

    removePlayer(index) {
        this.state.players.splice(index,1);
        this.setState({
            players: this.state.players
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="ScoreBoard" numberOfPlayers={this.state.players.length} players={this.state.players}/>
                <div className="players">
                    {this.state.players.map((player, index) => {
                        return (
                            <Player
                                onScoreChange={delta=>this.onScoreChange(index, delta)}
                                name={player.name}
                                score={player.score}
                                key={player.id} removePlayer={()=>this.removePlayer(index)}/>
                        );
                    })}
                </div>
                <AddPlayer addPlayer={this.addPlayer}/>
            </div>
        );
    }
}

const Header = props => {
    let totalScore = props.players.reduce((acc,n)=>acc+n.score,0);
    return (
        <header className="header">
            <Stats numberOfPlayers={props.numberOfPlayers} totalScore={totalScore}/>
            <h1>{props.title}</h1>
        </header>
    );
};

const Stats = props =>{
    return (
        <div className="stats">
            <p>Players: {props.numberOfPlayers}</p>
            <p>Total Score: {props.totalScore}</p>
        </div>
    );
};

const Player = props => {
    return (
        <div className="player">
            <button className="remove-player" onClick={props.removePlayer}>X</button>
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
