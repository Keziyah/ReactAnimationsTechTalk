import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HairTutorial from './HairTutorial'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <Hero />
                    <HairTutorial />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App