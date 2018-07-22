import React, {Component} from 'react';

class AddPlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState({name: name});
    }

    addPlayer(e) {
        e.preventDefault();
        this.props.addPlayer(this.state.name);
        this.setState({name: ''})
    }

    render() {
        return(
            <div className="add-player-form">
                <form onSubmit={this.addPlayer.bind(this)}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}
                        placeholder="Player Name"
                    />
                    <input type="submit" value="Add Player"/>
                </form>
            </div>
        );
    }
}

export default AddPlayerForm;