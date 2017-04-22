import React, { Component } from 'react'
import {Link} from 'react-router'
import Search from './Search'

//image source: https://pixabay.com/en/smile-color-laugh-black-1485850/ 

class Hero extends Component {
    render() {
        return (
            <div id="heroimg">
                <div id="hero-text" className="container">
                    <div className="col-md-8">
                        <h1>New hair don't care.</h1>
                        <h4>Boot the bundles. Skip the beauty shop. Buy hair for your next look from people right in your neighborhood.</h4>
                    </div> 
                </div>
                <Search/>
            </div>
        )
    }
}

export default Hero 