import React, { Component } from "react";
import Topnav from "./components/Topnav";
import TopJumbo from "./components/TopJumbo";
import Skyline from "./components/Skyline";
import ServiceDescript from "./components/ServiceDescript";
import About from "./components/About";
import Contact from "./components/Contact";
import FeeArrangements from "./components/FeeArrangements";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";

const appWidth = {
	maxWidth: "1020px",
	margin: "auto",
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<title>Law Offices of John V. Grienauer</title>
					<meta
						name="description"
						content="John V. Grienauer is a lawyer based out of Los Angeles. He specializes in real estate litigation and has been in practice for over 40 years."
					/>
				</Helmet>
				<Topnav appWidth={appWidth} title="home" />
				<TopJumbo appWidth={appWidth} />
				<LazyLoad>
					<Skyline />
				</LazyLoad>
				<ServiceDescript />
				<LazyLoad>
					<Intro title="about" />
				</LazyLoad>
				<About title="services" />
				<FeeArrangements title="fees" />
				<Contact title="contact" />
				<Footer />
			</div>
		);
	}
}

export default App;
