import React, { Component } from 'react';

class JumbotronComponent extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <h1>move forward</h1>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="container subheader">
                        <div className="row">
                            <div className="col-12">
                            <p>the complete collection</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default JumbotronComponent;