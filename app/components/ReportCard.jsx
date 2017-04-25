import React from 'react';

const ReportCard = (props) => {
    console.log("REPORT CARD", props )
    return (
        <div className="demo-card-event mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
                <h4>
                    <i className="material-icons">report</i>
                    <br />
                    Report User
                </h4>
            </div>
            <select>
                <option value="User has lice">User has lice</option>
                <option value="User is abusive">User is abusive</option>
                <option value="User is shady">User is shady</option>
            </select>
            <input type="text" placeholder="Write your complaint here"/>
            <button id="submit-report" value={props.id} onClick={props.toggle.bind()} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                   Submit
                </button>
            <div className="mdl-card__actions mdl-card--border">
                <div className="mdl-layout-spacer"></div>
            </div>
        </div>
    )
}

export default ReportCard; 