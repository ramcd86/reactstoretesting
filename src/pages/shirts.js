import React, { Component } from 'react';

class ShirtsComponent extends Component {

    constructor(props) {
        super();
        // console.log(this.props);
        this.shirtNames = '';
    }

    componentDidUpdate(){
        console.log('this.props.state', this.props.state);
        if (this.props.state) {
            this.shirtNames = this.props.state.shirts.forEach(shirt => (
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">{shirt.shirtName}</div>
                        <div className="col-6">{shirt.price}</div>
                    </div>
                </div>
            ));
        }
    }

    render() {

        // let shirtNames = '';




        return (
            <div className="container mt-5">
                <div className="row">
                    {this.shirtNames}
                </div>
            </div>
        )
    }

}

export default ShirtsComponent