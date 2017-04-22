import React, { Component } from 'react'

//This is the bottom half of the Hairbnb home page. 
//It has a basic how-to on how the service works. 

//Here, I need to render these animated tutorial components. 
    //1. Find hair by type, color, style, etc and pay for it online. 
//pic src https://pixabay.com/en/beautiful-colorful-colourful-1869208/ 
    //2. Meet up with your host, who will cut and wash their hair to give you.
        //Hairbnb ensures that hosts have clean, lice-free hair in good condition. 
    //3. Wear your new hair any way you want. As extensions, as a wig, etc. 
        //Return it to your host to avoid paying a late fee. 
    //4. Get compliments from your family and friends on your new bomb ass hairdo. 


class HairTutorial extends Component {
    render() {
        return (
            <div className="container">
                <div id="tutorial-header">
                    <h1 id="hair-tutorial-header">It's unbe<span id="weave">weave</span>able</h1>
                </div>
                <TutorialContainer />
            </div>
        )
    }
}
export default HairTutorial 


class TutorialContainer extends Component {
    render() {
        return (
            <div className="tutorial-container">
                <div>
                    <img className="tutorial-image" src="Tutorial1.png" />
                    <h1 >Find Your Look</h1>
                </div>
            </div>
        )
    }
}