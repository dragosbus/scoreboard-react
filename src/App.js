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
    render() {
        return(
            <Header/>
        );
    }
}


export default App;
