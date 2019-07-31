import React, { Component } from 'react';
import JumbotronComponent from './../components/jumbotron.js';

class HomeComponent extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
            <JumbotronComponent/>
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