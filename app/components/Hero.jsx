import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from './react-transition-group/src/CSSTransitionGroup'
import Search from './Search'


class Hero extends Component {
    constructor() {
        super()

        this.state = { shouldShowSearch: false }
        this.showSearch = this.showSearch.bind(this)
    }

    showSearch() {
        this.setState({ shouldShowSearch: true })
    }

    render() {
        const searchIcon = <button className="mdl-button mdl-js-button" id="icon-search" onClick={this.showSearch}>
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>

        return (
            <div id="heroimg">
                <div id="hero-text" className="container">
                    <div className="col-md-8">
                        <h1>New hair don't care.</h1>
                        <h4>Boot the bundles. Skip the beauty shop. Buy hair for your next look from people right in your neighborhood.</h4>
                    </div>
                </div>
                <CSSTransitionGroup transitionName="search" transitionAppear={false} transitionEnterTimeout={400} transitionEnter={true} transitionLeave={false}>
                    {!this.state.shouldShowSearch && searchIcon}
                    {this.state.shouldShowSearch && <Search />}
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Hero

//image source: https://pixabay.com/en/smile-color-laugh-black-1485850/ 
