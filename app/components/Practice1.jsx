import React, {Component} from 'react'
import CSSTransitionGroup from './react-transition-group/src/CSSTransitionGroup'
/* Introductory tutorial from:
https://code.tutsplus.com/tutorials/introduction-to-animations-in-reactjs--cms-28083
*/


//  Define all of the transition properties on the transitiongroup component.
//  Then in your CSS, add the transition name and it's propercies.

export default class Practice1 extends Component {
  constructor() {
    super()
    this.state = {data: [], name: ''}

    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this)
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }

  add() {
    const arr = this.state.data.slice()
    arr.push({'id': (new Date()).getTime(), 'name': this.state.name})
    this.setState({data: arr})
  }



  render() {
    return (
    <div>
        <CSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <h2>This is a damn test.</h2>
        </CSSTransitionGroup>

        <div>
            Enter Name <input type="text" onChange={this.handleChange}/> <input onClick={this.add} type="button" value="Add"/>
        </div>

        <ul>
            <CSSTransitionGroup transitionName="anim" transitionAppear={false} transitionEnterTimeout={5000} transitionEnter={true} transitionLeave={false}>
            {
                this.state.data.map(player => {
                  return <li key={player.id}>{player.name}</li>
                })
            }
            </CSSTransitionGroup>
        </ul>
    </div>
    )
  }
}


