import React, {Component} from 'react'
import Box from './Box2'
import TransitionGroup from './react-transition-group/src/TransitionGroup'

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

//If using TweenMax, you don't need to specify transition properties in the
//tax that wraps Box. 
//You just need TransitionGroup, which allows you to 
//define animations in the child's lifecycle hooks. 
  render() {
    return (
           <div>
               <h1>Testtttt</h1>
               {/*if should show box is true, render the div with the class of box*/}
               <TransitionGroup >
               {this.state.shouldShowBox && <Box />}
               </TransitionGroup>

               <button className="toggle-btn" onClick={this.toggleBox}>
                   toggle
               </button>
           </div>
    )
  }
}
