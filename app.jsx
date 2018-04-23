const App = () => {
    return (
        <div className="scoreboard">
            <Header title={3}/>
            <Player name="Dragos" score={40}/>
            <Player name="Mihail" score={30}/>
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

Header.propTypes = {
    title: React.PropTypes.string
};

App.defaulProps = {
    title:"Scoreboard"
};

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
