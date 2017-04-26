import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import ResultCard from './ResultCard'
import TransitionGroup from './react-transition-group/src/TransitionGroup'
import { Front, Back } from './MakeFlip'

//All avatar and card images taken from pixel bay. 

export default class Results extends Component {

    constructor() {
        super()

        this.state = {
            shouldShowResult1: true,
            shouldShowResult2: true,
            shouldShowResult3: true,
            shouldShowResult4: true
        }

        this.toggle = this.toggle.bind(this)
    }

//I can't just change all of them at the same time. I have to switch on the specific card. 
    toggle = (e) => {
        switch (+e.target.value) {
            case 1: 
                this.setState({shouldShowResult1: !this.state.shouldShowResult1})
                break; 
            case 2: 
                this.setState({shouldShowResult2: !this.state.shouldShowResult2})
                break; 
            case 3: 
                this.setState({shouldShowResult3: !this.state.shouldShowResult3})
                break; 
            case 4: 
                this.setState({shouldShowResult4: !this.state.shouldShowResult4})
                break; 
        }

        // this.setState({
        //     shouldShowResult1: !this.state.shouldShowResult1,
        //     shouldShowResult2: !this.state.shouldShowResult2,
        //     shouldShowResult3: !this.state.shouldShowResult3,
        //     shouldShowResult4: !this.state.shouldShowResult4,
        // })
        // console.log("clickinnggg", this.state, "ID", e.target.value)
        // console.log("TARGET", e.target)
    }

    render() {

        const name1 = "Al-Anoud"
        const card1 = "card1.png"
        const avatar1 = "avatar1.png"
        const price1 = 330
        const description1 = "Silky straight, lice-free guaranteed!"
        const texture1 = "Straight"
        const color1 = "Brown"
        const length1 = "Long"

        const name2 = "Denise"
        const card2 = "card2.png"
        const avatar2 = "avatar2.png"
        const price2 = 400
        const description2 = "High quality, versatile soft hair"
        const texture2 = "Afro-kinky"
        const color2 = "Black"
        const length2 = "Short"

        const name3 = "TJ"
        const card3 = "card3.png"
        const avatar3 = "avatar3.png"
        const price3 = 15
        const description3 = "Please help me. I hate this beard."
        const texture3 = "Bushy"
        const color3 = "Brown"
        const length3 = "Longish"

        const name4 = "Lisa"
        const card4 = "card4.png"
        const avatar4 = "avatar4.png"
        const price4 = 150
        const description4 = "Best hair you've ever had"
        const texture4 = "Straight"
        const color4 = "Brown"
        const length4 = "Med"

        /*return (
            <div>
                <Navbar />
                <br />
                <div className="container">

                    <div className="row">

                        <div className="col-md-7">
                            <div className="row">

                                <div className="col-md-6">
                                    <ResultCard name={name1} card={card1} avatar={avatar1} price={price1} description={description1} texture={texture1} color={color1} length={length1} />
                                </div>

                                <div className="col-md-6">
                                    <ResultCard name={name2} card={card2} avatar={avatar2} price={price2} description={description2} texture={texture2} color={color2} length={length2} />
                                </div>

                            </div>

                            <br />

                            <div className="row">

                                <div className="col-md-6">
                                    <ResultCard name={name3} card={card3} avatar={avatar3} price={price3} description={description3} texture={texture3} color={color3} length={length3} />
                                </div>

                                <div className="col-md-6">
                                    <ResultCard name={name4} card={card4} avatar={avatar4} price={price4} description={description4} texture={texture4} color={color4} length={length4} />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-5">
                            <iframe width="414" height="518" frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/view?zoom=13&center=40.6602,-73.9690&key=AIzaSyCf9kpJkwxQMPgtx3S-aapY1f-yjUp29N8" allowFullScreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
        )*/

        return (
            <div className="anim">
                <Navbar />
                <br />
                <div className="container">

                    <div className="row">

                        <div className="col-md-7">
                            <div className="row">

                                <div className="col-md-6">
                                    <TransitionGroup >
                                       {this.state.shouldShowResult1 && <Front toggle={this.toggle} id={1} name={name1} card={card1} avatar={avatar1} price={price1} description={description1} texture={texture1} color={color1} length={length1} /> }
                                    { !this.state.shouldShowResult1 && <Back toggle={this.toggle} id={1} />}
                                    </TransitionGroup>
                                </div>

                                <div className="col-md-6">
                                    <TransitionGroup >
                                       {this.state.shouldShowResult2 && <Front toggle={this.toggle} id={2}  name={name2} card={card2} avatar={avatar2} price={price2} description={description2} texture={texture2} color={color2} length={length2} /> }

                                    { !this.state.shouldShowResult2 && <Back toggle={this.toggle}  id={2} />}
                                    </TransitionGroup>
                                </div>

                            </div>

                            <br />

                            <div className="row">

                                <div className="col-md-6">
                                    <TransitionGroup >
                                       {this.state.shouldShowResult3 && <Front toggle={this.toggle} id={3}  name={name3} card={card3} avatar={avatar3} price={price3} description={description3} texture={texture3} color={color3} length={length3} /> }

                                { !this.state.shouldShowResult3 && <Back toggle={this.toggle} id={3} />}
                                    </TransitionGroup>
                                </div>

                                <div className="col-md-6">
                                    <TransitionGroup >
                                       {this.state.shouldShowResult4 && <Front toggle={this.toggle} id={4}  name={name4} card={card4} avatar={avatar4} price={price4} description={description4} texture={texture4} color={color4} length={length4} /> }

                                    { !this.state.shouldShowResult4 && <Back toggle={this.toggle} id={4} />}
                                    </TransitionGroup>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-5">
                            <iframe width="414" height="518" frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/view?zoom=13&center=40.6602,-73.9690&key=AIzaSyCf9kpJkwxQMPgtx3S-aapY1f-yjUp29N8" allowFullScreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


