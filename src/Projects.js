// Page of quotes to show
import React from 'react';
import ProjectCard from './ProjectCard';
import Baby from 'babyparse';
import $ from 'jquery';

// PageOne Component
var Projects = React.createClass({
	getInitialState() {
		return {projects:[]}
	},
	componentDidMount() {
		//Ajax call and parse data
		$.get('data/project-data.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			//console.log(parsed);
			this.setState({projects:parsed.data})
		}.bind(this));	
	},
	render() {
		return (
			<div className="projectsPage">
				<div>
					{this.state.projects.map(function(data, i){
						return (<ProjectCard 
							key={'project' + i}
							name={data.title}
							date={data.date}
							url={data.link}
							desc={data.description}
						/>)
					})}

				</div>
			</div>
		);
	}
});

export default Projects;