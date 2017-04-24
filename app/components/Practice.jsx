import React, { Component } from 'react'

class Practice extends Component {
    constructor() {
        super()
    }

    render() {
      return (
      <div className="container">
          <nav className="navbar navbar-default">Hello I am a navbar</nav>
        <div className="row">
            <div className="col-md-4"><h3>Enlarge Item on Hover</h3>
            <img className="image" src="https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" alt="some pretty flowers"/>
            </div>
            <div className="col-md-4"><h3>Delayed Fade-In on load</h3>
            <img className="image" src="http://www.wikiality.com/file/2016/11/bears1.jpg" alt="a bear"/>
            </div>
            <div className="col-md-4"><h3>Search icon that expands to input box</h3>
            <div>

            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4"><h3>Loading animation</h3></div>
            <div className="col-md-4"><h3>Animated text on load</h3></div>
            <div className="col-md-4"><h3>Click to enlarge footer</h3></div>
        </div>
     <footer className="footer">This is a simple react app. </footer>
      </div>
      )
    }
}

export default Practice