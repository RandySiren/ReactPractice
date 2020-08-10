import React from 'react';

class UserInput extends React.Component {
    render() {
        return (
            <div className='UserInput'>
                <form>
                    <label>Username: </label>
                    <input
                        type='text'
                        placeholder={this.props.username}
                        onChange={this.props.change}
                    ></input>
                </form>
            </div>
        );
    }
}

export default UserInput;
