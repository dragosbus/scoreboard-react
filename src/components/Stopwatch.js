import React, {Component} from 'react';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            previousTime: 0,
            elapsedTime: 0
        }
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onTick = this.onTick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onStart() {
        this.setState({
            running: true,
            previousTime: Date.now()
        });
    }

    onStop() {
        this.setState({running: false});
    }

    onReset() {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now()
        });
    }

    onTick() {
        if(this.state.running) {
            var now = Date.now();
            this.setState({
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
                previousTime: Date.now()
            });
        }
    }

    render() {
        let seconds = Math.floor(this.state.elapsedTime / 1000);
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">{seconds}</div>
                {this.state.running ? 
                    <button onClick={this.onStop}>Stop</button>
                    :
                    <button onClick={this.onStart}>Start</button>
                }
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;