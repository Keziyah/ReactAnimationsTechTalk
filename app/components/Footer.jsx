import React, {Component} from 'react'
//Need to come back to this and fix the footer positioning. Or just remote it entirely. 
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">
                        Copyright 2017 Hairbnb. 
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer