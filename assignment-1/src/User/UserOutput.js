import React from 'react';

class UserOutput extends React.Component {
    render() {
        return (
            <div className='UserOutput'>
                <p>{this.props.username}</p>
                <p>This is some text!</p>
            </div>
        );
    }
}

export default UserOutput;
