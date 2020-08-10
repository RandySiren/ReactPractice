import React from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends React.Component {
    state = {
        username: 'Enter username',
    };

    userInputChangeHandler = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    render() {
        return (
            <div className='App'>
                <UserInput
                    username={this.state.username}
                    change={this.userInputChangeHandler}
                />
                <UserOutput username={this.state.username} />
            </div>
        );
    }
}

export default App;
