import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HowTo from './HowTo'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <Hero />
                    <HowTo />
                </div>
            </div>
        )
    }
}

export default App