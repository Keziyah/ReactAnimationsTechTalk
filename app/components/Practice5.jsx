import React, {Component} from 'react'
import {findDOMNode, render} from 'react-dom'
import TransitionGroup from './react-transition-group/src/TransitionGroup'
import ResultCard from './ResultCard'
import ReportCard from './ReportCard'
 
//Chang Wang's animation tutorial, part 2, on higher order components. 
//https://medium.com/@cheapsteak/reusing-reacttransitiongroup-animations-with-higher-order-components-1e7043451f91

//Here we are writing a function that returns a component, a HOC. 
//Now, any component that wants this animation can just be passed into fadesUp. 
//Notice the differences between this and our regular box component. 


function makefadeUp (Component) {
    console.log("fadesuppp!!!!")
    return class FadesUp extends React.Component {

    componentWillEnter (callback) {
        const el = findDOMNode(this)
        TweenMax.fromTo(el, 2, {rotationY: 180, opacity: 0}, {rotationY: 0, opacity:1, onComplete: callback})
        // TweenMax.fromTo(el, 2, {transformOrigin:'top', rotationY: -180, opacity: 0}, {rotationY: 0, opacity: 1, onComplete: callback})

        console.log(el, "Entering")
    }

    componentWillLeave(callback) {
        const el = findDOMNode(this)
        TweenMax.fromTo(el, 0, {rotationY:0, opacity:0}, {rotationY: -180, opacity: 0, onComplete: callback})
        // TweenMax.fromTo(el, 0, {rotationY: 0, opacity: 1}, {transformOrigin:'top', rotationY: -180, opacity: 0, onComplete: callback})

        console.log(el, "Leaving")
    }

//Use react refs to get a reference to this element's container. 
    render() {
        console.log("PROPS", this.props)
        return <Component { ...this.props } />
    }
    }
}

//Create the animated box by passing it into the HOC above
const Front = makefadeUp(ResultCard)

//Create the animated circle by passing it into the HOC above
const Back = makefadeUp(ReportCard)



//Finally import the child elements onto the main page. 
export default class Page extends React.Component {
  state = {
    shouldShowResult: true,
    shouldShowReport: false
  }

  toggle = () => {
    this.setState({
      shouldShowResult: !this.state.shouldShowResult,
      shouldShowReport: !this.state.shouldShowReport
    });
  };

  render () {


    return (
    <div className="page" >

      <TransitionGroup>
        { this.state.shouldShowResult && <Front name="Keziyah"/>}
        { this.state.shouldShowReport && <Back/>}
      </TransitionGroup>

      <input type="text" />
      <button
        className="toggle-btn"
        onClick={this.toggle}>
        toggle
      </button>

    </div>
    )
  }
}
