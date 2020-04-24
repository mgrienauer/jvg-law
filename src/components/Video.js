import React, { Component } from "react";

export default class Video extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	//add event listener to check for a resize of window
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}
	//remove resize listener after component needs to unmount
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}
	//update state to reflect window dimensions
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	render() {
		return (
			<div className="video-container">
				<iframe
					title="John Grienauer Law Offices"
					alt="Video introduction of John V Grienauer, Los Angeles Real Estate Lawyer"
					src="https://www.youtube.com/embed/t_2Lz7TGVN8"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen="true"
				/>
			</div>
		);
	}
}
