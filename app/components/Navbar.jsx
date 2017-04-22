import React, { Component } from 'react'
import {Link} from 'react-router'

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
                            <li>Messages</li>
                            <li>Help</li>
                            <li>
                                <button>  Rent Your Hair</button>
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