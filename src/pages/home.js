import React, { Component } from 'react';

class HomeComponent extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                Home.
                {this.props.state.initState}

                <button onClick={() => {
                    this.props.stateMutator({ actionType: 'DEFAULT', payload: 'NOT NULL1' })
                }}>test</button>
            </div>
        )
    }

}

export default HomeComponent