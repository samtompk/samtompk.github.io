// Landing page -- what users see on arrival
import React from 'react';
import './css/HomePage.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';

var HomePage = React.createClass({
    render() {
        return(
            <div className="home">
            	<img src="img/profile.jpg" />
            	<h1>Samuel Tompkins</h1>
            	<p>I am a student at the University of Washington studying Informatics.
            	This is my portfolio that I built for my INFO 343 class using the React framework.
            	Take a look at some of my previous projects, and contact me if you'd like!</p>
				<Card>
				<CardHeader
				title="View Summary Resume"
				actAsExpander={true}
				showExpandableButton={true}
				/>
				<CardText expandable={true}>
					<b>Work Experience</b><br/>
					Venture Arts, UI/UX Intern | June - September 2016<br/>
					University of Washington Golf Driving Range | October 2014 – September 2015<br/>
					Seattle Golf Club, Honor Caddy, Summers 2010 – 2015<br/>
					Hill’s Neighborhood Restaurant, Dishwasher, Summer 2013<br/><br/>
					<b>Achievements</b><br/>
					Recipient of Chick Evans Caddie Scholarship to UW, 2014 - Present<br/>
					Member of Theta Chi Fraternity, Alpha Rho Chapter at the University of Washington
				</CardText>
				</Card>
            </div>
        )
    }
});

export default HomePage;