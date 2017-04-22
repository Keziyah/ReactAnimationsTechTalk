import React, {Component} from 'react'
import {findDOMNode, render} from 'react-dom'
import TransitionGroup from './react-transition-group/src/TransitionGroup'
 
//Chang Wang's animation tutorial, part 2, on higher order components. 
//https://medium.com/@cheapsteak/reusing-reacttransitiongroup-animations-with-higher-order-components-1e7043451f91

//Here we are writing a function that returns a component, a HOC. 
//Now, any component that wants this animation can just be passed into fadesUp. 
//Notice the differences between this and our regular box component. 
function makefadeUp (Component) {
    console.log("fadesuppp!!!!")
    return class FadesUp extends Component {

    componentWillEnter (callback) {
        const el = findDOMNode(this)
        TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity:1, onComplete: callback})
    }

    componentWillLeave(callback) {
        const el = findDOMNode(this)
        TweenMax.fromTo(el, 0.3, {y:0, opacity:1}, {y: -100, opacity: 0, onComplete: callback})
    }

//Use react refs to get a reference to this element's container. 
    render() {
        return <Component ref="child" { ...this.props } />
    }
    }
}

//Create the animated box by passing it into the HOC above
const Box = makefadeUp(class extends Component {
    render() {
        return <div className="box"><img src="http://friendsofbaraboozoo.org/wp-content/uploads/2016/01/blue-box.jpg" alt="a blue box"/> </div>
    }
})

//Create the animated circle by passing it into the HOC above
const Circle = makefadeUp(class extends Component {
    render() {
        return <div className="circle"><img src="https://qph.ec.quoracdn.net/main-qimg-4ac0bf076120fa49f9b925d735b1578a" alt="a circle"/></div>
    }
})



//Finally import the child elements onto the main page. 
export default class Page extends React.Component {
  state = {
    shouldShowBox: true,
    shouldShowCircle: false
  }

  toggle = () => {
    this.setState({
      shouldShowBox: !this.state.shouldShowBox,
      shouldShowCircle: !this.state.shouldShowCircle
    });
  };

  onKeyPress(e) {
      console.log(e.key)
  }

  handleScroll() {
      console.log("SCROLLING")
  }

  render () {


    return (<div className="page" onScroll={this.handleScroll}>

      <TransitionGroup>
        { this.state.shouldShowBox && <Box onScroll={this.handleScroll}/>}
        { this.state.shouldShowCircle && <Circle/>}
      </TransitionGroup>

      <input type="text" onKeyPress={this.onKeyPress}/>
      <button
        className="toggle-btn"
        onClick={this.toggle}>
        toggle
      </button>
    </div>
    )
  }
}
