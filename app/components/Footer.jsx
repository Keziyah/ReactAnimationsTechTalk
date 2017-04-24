import React, { Component } from 'react'
//Need to come back to this and fix the footer positioning. Or just remote it entirely. 
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <nav className="navbar navbar-default navbar-fixed-bottom" role="navigation">
                    <div className="container">
                        <img alt="Brand" className="logo" src="logo.png" />
                        <p className="text-muted">
                            Copyright 2017 Hairbnb.
                        </p>
                    </div>
                </nav>
            </footer>
        )
    }
}

export default Footer