import React from 'react';

class CharComponent extends React.Component {
    render() {
        const style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black',
        };

        return (
            <p style={style} onClick={this.props.click}>
                {this.props.output}
            </p>
        );
    }
}

export default CharComponent;
