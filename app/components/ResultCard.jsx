import React, { Component } from 'react';

//Thanks to material design lite for the cards.  
export default class ResultCard extends Component {
    render() {
        const picStyle = {
            backgroundImage: `url(${this.props.card})`
        }

        const reportUser = <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        return (
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand" style={picStyle}>
                    <div className="row" id="pic-name">
                        <div className="col-md-8">
                            <h2 className="mdl-card__title-text">{this.props.name}
                                <button value={this.props.id} id="warning-btn" onClick={this.props.toggle} >x</button>
                            </h2>
                    </div>
                    <div className="col-md-4">
                        <img className="card-avatar" src={this.props.avatar} alt="profile pic" />
                    </div>
                </div>
            </div>
            <div className="mdl-card__supporting-text">
                <p><span className="price">${this.props.price}</span> {this.props.description}</p>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <p>{this.props.texture} - {this.props.color} - {this.props.length} <span className="spacer"></span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span className="spacer"></span>
                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                </p>
            </div>
            </div >
        )
    }
}



//value={this.props.id} onClick={this.props.toggle}


//Testing version


/*const ResultCard = () => {
        const picStyle = {
            backgroundImage: `url(card1.png)` 
        }

        const reportUser = <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        return (
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand" style={picStyle}>
                    <div className="row" id="pic-name">
                        <div className="col-md-8">
                            <h2 className="mdl-card__title-text">Keziyah</h2>
                        </div>
                        <div className="col-md-4">
                            <img className="card-avatar" src="avatar1.png" alt="profile pic" />
                        </div>
                    </div>
                </div>
                <div className="mdl-card__supporting-text">
                    <p><span className="price">$20</span> Clean, usable hair for you</p>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <p>Straight - Brown - Long <span className="spacer"></span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span className="spacer"></span>
                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </p>
                </div>
            </div>
        )
    }*/

//export default ResultCard