import React, { Component } from 'react'
import CSSTransitionGroup from './react-transition-group/src/CSSTransitionGroup'

class App extends Component {
    render() {
        return (
            <div className="app">
                <CSSTransitionGroup transitionName="fade" transitionAppear={true} transitionEnter={true} transitionLeave={true}
                transitionLeaveTimeout={200} transitionEnterTimeout={800}
                transitionAppearTimeout={800}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default App