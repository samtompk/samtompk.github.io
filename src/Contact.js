// Page of quotes to show
import React from 'react';
import './css/Contact.css';
import RaisedButton from 'material-ui/RaisedButton';
// PageOne Component
var Contact = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div className="contact">
				<h4>Contact Me</h4>
				<RaisedButton className="btn" label="Linked In" href="https://www.linkedin.com/in/samuel-tompkins-2891b1b0" 
				target="_blank" backgroundColor="#0077B5"/>				
				<RaisedButton className="btn" label="twitter" href="https://twitter.com/SamTompk" 
				target="_blank" backgroundColor="#55ACEE"/>				
				<RaisedButton className="btn" label="facebook" href="https://www.facebook.com/samuel.d.tompkins" 
				target="_blank" backgroundColor="#3b5998"/>				
				<RaisedButton className="btn" label="spotify" href="https://open.spotify.com/user/124915579" 
				target="_blank" backgroundColor="#84bd00"/>				
				<RaisedButton className="btn" label="youtube" href="https://www.youtube.com/channel/UCgoF9_bRoM9mWM995DcXIXQ" 
				target="_blank" backgroundColor="#e52d27"/>				
				<RaisedButton className="btn" label="email" href="mailto:samtompk@gmail.com" 
				target="_blank" backgroundColor="#FCFCFC"/>
			</div>
		);
	}
});

export default Contact;