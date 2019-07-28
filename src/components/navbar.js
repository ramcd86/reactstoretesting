import React, { Component } from 'react';

class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                    <span className="navbar-brand" href="#"><i className="fa fa-dot-circle-o" aria-hidden="true"></i> ICON</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span className="nav-link" href="#">Home <span className="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Features</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Pricing</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">About</span>
                        </li>
                        </ul>
                    </div>
                    </div>

                </nav>

            </div>
        )
    }
}

export default NavbarComponent;