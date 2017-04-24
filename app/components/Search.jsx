import React, { Component } from 'react'
import { Link } from 'react-router'

class Search extends Component {
    render() {
        return (
            <div className="container row" id="search-container">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-2">
                            <input type="text" placeholder="Find your new 'do" />
                        </div>
                        <div className="col-md-2">
                            <input type="text" placeholder="Location" />
                        </div>
                        <div className="col-md-2">
                            <input type="text" placeholder="Borrow" />
                        </div>
                        <div className="col-md-2">
                            <input type="text" placeholder="Return" />
                        </div>
                        <div className="col-md-2">
                            <Link to="/results"> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                                Find Hair
                </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search; 