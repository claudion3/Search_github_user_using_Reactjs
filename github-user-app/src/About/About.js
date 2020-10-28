import React from "react";

const About = () => {
	return (
		<div className="about">
			<div className="tex-about">
				<h3>About this project</h3>
				<p>
					I created this application as the final project of my REACT course.
					<br></br>
					For building it I used React Router, Refs, Context and other different
					Hooks.<br></br>
					<br></br>
					The main aim of this application is to make a search of Github user
					which I have to fetch date from Github API and desplay avatar and
					username. When you click on username it will take you to the person
					profile on Github
				</p>
			</div>
		</div>
	);
};
export default About;
