import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PlayerActionCreators from './actions/player';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';



class App extends Component {

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

        const {dispatch, players} = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

        const playerComponent = players.map((player,index)=>{
            return <Player
                    index={index}
                    name={player.name}
                    score={player.score}
                    key={player.name}
                    updatePlayerScore={updatePlayerScore}
                    removePlayer={removePlayer}
                   />
        });

        return(
            <div className="scoreboard">
                <Header players={players}/>
                <div className="players">
                    {playerComponent}
                </div>
                <AddPlayerForm addPlayer={addPlayer}/>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        players: state
    }
);


export default connect(mapStateToProps)(App);
