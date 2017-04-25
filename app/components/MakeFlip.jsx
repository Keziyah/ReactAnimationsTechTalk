import React from 'react'
import {findDOMNode, render} from 'react-dom'
import ResultCard from './ResultCard'
import ReportCard from './ReportCard'


function makeFlip (Component) {
    return class Flip extends React.Component {
        constructor(props) {
            super(props)

        //     this.state = {
        //     shouldShowResult: true,
        //     shouldShowReport: false
        // }

        // this.toggle = this.toggle.bind(this)
    }

    componentWillEnter (callback) {
        const el = findDOMNode(this)
        TweenMax.fromTo(el, 1, {rotationY: 180, opacity: 0}, 
        {rotationY: 0, opacity:1, onComplete: callback})
    }

    componentWillLeave(callback) {
        const el = findDOMNode(this)
        TweenMax.fromTo(el, 0, {rotationY:0, opacity:0}, 
        {rotationY: -180, opacity: 0, onComplete: callback})
    }

    render() {
        return <Component { ...this.props } />
    }
    }
}

//Create the animated front card by passing it into the HOC above
export const Front = makeFlip(ResultCard)

//Create the animated back card by passing it into the HOC above
export const Back = makeFlip(ReportCard)