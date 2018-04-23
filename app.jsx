const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            <Player name="Dragos" score="40"/>
            <Player name="Mihail" score="30"/>
        </div>
    );
};

const Header = () => {
    return (
        <header className="header">
            <h1>ScoreBoard</h1>
        </header>
    );  
};

const Player = props => {
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
                </div>
            <div className="player-score">
                <div className="counter">
                    <button className="counter-action decrement">-</button>
                    <div className="counter-score">{props.score}</div>
                    <button className="counter-action increment">+</button>
                </div>
            </div>
        </div>
    );  
};

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
