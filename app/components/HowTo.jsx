import React, { Component } from 'react'
import { Screen, ScreenSlice } from 'react-screen';

//This is the bottom half of the Hairbnb home page. 
//It has a basic how-to on how the service works. 

//Here, I need to render these animated tutorial components. 
//1. Find hair by type, color, style, etc and pay for it online. 
//pic src https://pixabay.com/en/beautiful-colorful-colourful-1869208/ 
//2. Meet up with your host, who will cut and wash their hair to give you.
//Hairbnb ensures that hosts have clean, lice-free hair in good condition. 
//pic src https://pixabay.com/en/friends-female-nature-girls-summer-2159190/ 
//3. Wear your new hair any way you want. As extensions, as a wig, etc. 
//Return it to your host to avoid paying a late fee. 
//https://pixabay.com/en/woman-face-curly-hair-fashion-1439909/
//4. Get compliments from your family and friends on your new bomb ass hairdo. 
//https://pixabay.com/en/afro-hair-natural-fashion-hippie-747801/

// class HowToSlider extends Component {
//     render() {
//         return (

//         );
//     }
// }

class HowTo extends Component {
    render() {
        //Card 1
        const image1 = "Tutorial1.png"
        const header1 = "1. Find Your Look"
        const paragraph1 = "Find hair by type, color, and style, and pay for it online."
        //Card 2
        const image2 = "Tutorial2.png"
        const header2 = "2. Get your hair."
        const paragraph2 = "Meet up with your host, who will cut and wash their hair to give you."
        //Card 3
        const image3 = "Tutorial3.png"
        const header3 = "3. Do you."
        const paragraph3 = "Wear your new hair any way you want. As extensions, as a wig, etc."
        //Card 4
        const image4 = "Tutorial4.png"
        const header4 = "4. Stunt on 'em."
        const paragraph4 = "Collect compliments and make the haters weep."
        return (
            <div className="container">
                <div id="tutorial-header">
                    <h1 id="hair-tutorial-header">Hairbnb is revolutionizing the way you shop for hair. Here's how. </h1>
                    <span id="down" className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                </div>
                <Screen>
                    <ScreenSlice>
                        <HowToCard image={image1} header={header1} paragraph={paragraph1}/>
                    </ScreenSlice>
                    <ScreenSlice>
                         <HowToCard image={image2} header={header2} paragraph={paragraph2}/>
                    </ScreenSlice>
                    <ScreenSlice>
                        <HowToCard image={image3} header={header3} paragraph={paragraph3}/>
                    </ScreenSlice>
                    <ScreenSlice>
                        <HowToCard image={image4} header={header4} paragraph={paragraph4}/>
                    </ScreenSlice>
                </Screen>
            </div>
        )
    }
}
export default HowTo;


class HowToCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="tutorial-container">
                    <img className="tutorial-image" src={this.props.image} />
                    <h1 className="tutorial-text">{this.props.header}</h1>
                    <p className="tutorial-p">{this.props.paragraph}</p>
                </div>
            </div>
        )
    }
}