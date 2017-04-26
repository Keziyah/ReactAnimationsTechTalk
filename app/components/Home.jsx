import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HowTo from './HowTo'
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div className="anim">
                <Navbar />
                <div>
                    <Hero />
                    <HowTo />
                </div>
            </div>
        )
    }
}

export default Home
