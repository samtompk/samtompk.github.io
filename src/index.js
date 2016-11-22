import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
import HomePage from './HomePage';
import Projects from './Projects';
import Contact from './Contact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
	<MuiThemeProvider>
	    <Router history={hashHistory}>
	        <Route path="/" component={App}>
	            <IndexRoute component={HomePage}/>
	            <Route path="projects" component={Projects}/>
	            <Route path="contact" component={Contact}/>
	        </Route>
	    </Router>
    </MuiThemeProvider>,
  	document.getElementById('root')
);
