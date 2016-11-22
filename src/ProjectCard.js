import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './css/ProjectCard.css';

var ProjectCard = React.createClass({
    render() {
        return(
			<Card className="card">
				<CardTitle title={this.props.name} subtitle={this.props.date} />
				<CardText>{this.props.desc}</CardText>
				<CardActions>
					<RaisedButton label="View Here" href={this.props.url} 
					target="_blank" backgroundColor="#06D6A0"/>
				</CardActions>
			</Card>
        )
    }
});

export default ProjectCard;