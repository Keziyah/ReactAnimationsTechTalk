import React, {Component} from 'react'

//  Continuation of Tutorial from Chang Wang's medium post https://medium.com/@cheapsteak/animations-with-reacttransitiongroup-4972ad7da286

//Box with react transitions and lifecycle hooks with TweenMax
//Can export to Practice 3

//Component will enter: What happens when the element first enters the dom?
//Component will leave: What happens when the elemement leaves the dom?

export default class Box extends Component {

    componentWillEnter (callback) {
        const el = this.container
        TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity:1, onComplete: callback})
    }

    componentWillLeave(callback) {
        const el = this.container
        TweenMax.fromTo(el, 0.3, {y:0, opacity:1}, {y: -100, opacity: 0, onComplete: callback})
    }

//Use react refs to get a reference to this element's container. 
    render() {
        return <div ref={c => this.container = c} className="box"><img src="http://friendsofbaraboozoo.org/wp-content/uploads/2016/01/blue-box.jpg" alt="a blue box"/> </div>
    }

}


//Box with Just react transition group: can export to Practice2
// export default class Box extends Component {
//     render() {
//         return <div className="box">Transition </div>
//     }

// }