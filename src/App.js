import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var App = React.createClass( {
	render() {
		return (
			<div className="App">
				{/*Do all the stuff below here*/}
					<div className="navbar">
						<Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
						<Link className="link" activeClassName='active' to="/projects">Projects</Link>
						<Link className="link" activeClassName='active' to="/contact">Contact</Link>
					</div>
					<div className="children">
						{this.props.children}
					</div>
				{/*Do all the stuff above here*/}
			</div>
		);
	}
});

export default App;
