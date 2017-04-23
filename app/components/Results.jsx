import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ResultCard from './ResultCard'

export default class Results extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ResultCard />
                <Footer />
            </div>
        )
    }
}

