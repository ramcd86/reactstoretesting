import React, { Component } from 'react';

class ShirtsComponent extends Component {

    constructor(props) {
        super();
        // console.log(this.props);
        this.state = {
            shirts: ''
        }
    }

    componentDidUpdate(){
       

        let shirtNames; 

        if (this.props.state & this.state.shirts === '') {
            shirtNames = this.props.state.shirts.forEach(shirt => (
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">{shirt.shirtName}</div>
                        <div className="col-6">{shirt.price}</div>
                    </div>
                </div>
            ));
            this.setState({
                shirts: shirtNames
            })
            console.log('this.props.state', shirtNames);
        }


    }

    render() {

        // let shirtNames = '';




        return (
            <div className="container mt-5">
                <div className="row">
                    {this.state.shirts}
                </div>
            </div>
        )
    }

}

export default ShirtsComponent