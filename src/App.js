import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PlayerActionCreators from './actions/player';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import PlayerDetail from './components/PlayerDetail';



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
        const {dispatch, players, selectedIndex} = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
        const showDetail = bindActionCreators(PlayerActionCreators.showDetail, dispatch);
        const playerComponent = players.map((player,index)=>{
            return <Player
                    index={index}
                    name={player.name}
                    score={player.score}
                    key={player.name}
                    updatePlayerScore={updatePlayerScore}
                    removePlayer={removePlayer}
                    showDetail={showDetail}
                   />
        });

        return(
            <div className="scoreboard">
                <Header players={players}/>
                <div className="players">
                    {playerComponent}
                </div>
                <AddPlayerForm addPlayer={addPlayer}/>
                <PlayerDetail players={players} selectedIndex={selectedIndex}/>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        players: state.players,
        selectedIndex: state.selectedIndex
    }
);


export default connect(mapStateToProps)(App);
