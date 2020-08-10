import React from 'react';

class ValidationComponent extends React.Component {
    render() {
        let output = null;

        if (this.props.length < 5) {
            output = <p>Text too short</p>;
        } else {
            output = <p>Text long enough</p>;
        }

        return <div className='ValidationComponent'>{output}</div>;
    }
}

export default ValidationComponent;
