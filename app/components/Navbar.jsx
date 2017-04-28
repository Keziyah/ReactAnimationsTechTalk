import React, { Component } from 'react'
import { Link } from 'react-router'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            <img alt="Brand" className="logo" src="logo.png" />
                        </Link>
                    </div>
                    <div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><span className="mdl-badge" data-badge="4">Inbox</span></li>
                            <li>Help</li>
                            <li>
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"><Link to="/page">
                                    Rent Your Hair
                                </Link></button>
                            </li>
                            <li>
                                <img src="UserImg.png" id="userImg" alt="current logged in user" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar