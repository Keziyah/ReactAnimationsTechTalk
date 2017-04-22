import React, {Component} from 'react'
import Box from './Box'
import CSSTransitionGroup from './react-transition-group/src/CSSTransitionGroup'

//  Tutorial from Chang Wang's medium post https://medium.com/@cheapsteak/animations-with-reacttransitiongroup-4972ad7da286

//Need to come back to this to study how to use GSAPs Tween Max
//with Lifecycle hooks. 

export default class Home extends Component {
  constructor() {
    super()

    this.state = {shouldShowBox: false}
    this.toggleBox = this.toggleBox.bind(this)
  }

  toggleBox() {
      this.setState({shouldShowBox: !this.state.shouldShowBox})
      console.log("TOGGLED")
  }

  render() {
    return (
           <div>
               <h1>Testtttt</h1>
               {/*if should show box is true, render the div with the class of box*/}
               <CSSTransitionGroup transitionName="anim" transitionAppear={false} transitionEnterTimeout={3000} transitionEnter={true} transitionLeave={true} transitionLeaveTimeout={3000}>
               {this.state.shouldShowBox && <Box />}
               </CSSTransitionGroup>

               <button className="toggle-btn" onClick={this.toggleBox}>
                   toggle
               </button>
           </div>
    )
  }
}
