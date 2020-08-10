import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
    state = {
        text: '',
    };

    changeHandler = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    deleteHandler = (index) => {
        let text = this.state.text.slice();
        text = text.slice(0, index) + text.slice(index + 1);

        this.setState({
            text: text,
        });
    };

    render() {
        let charComponents = (
            <div>
                {[...this.state.text].map((letter, index) => {
                    return (
                        <CharComponent
                            output={letter}
                            click={() => this.deleteHandler(index)}
                            key={index}
                        />
                    );
                })}
            </div>
        );
        return (
            <div className='App'>
                <input
                    type='text'
                    onChange={(event) => this.changeHandler(event)}
                    value={this.state.text}
                />
                <p>{this.state.text}</p>
                <ValidationComponent length={this.state.text.length} />
                {charComponents}
            </div>
        );
    }
}

export default App;
