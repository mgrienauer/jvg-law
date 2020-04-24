import React from "react";
import { Container, Row, Col } from "reactstrap";

const topJumboStyle = {
	height: "200px",
	alignItems: "center",
	display: "flex",
};

const TopJumbo = (props) => {
	return (
		<div style={topJumboStyle} className="bg-light">
			<Container fluid className="top-jumbo" style={props.appWidth}>
				<Row>
					<Col sm="12" xl="6" className="text-center">
						<h1 className="text-responsive-big">John V. Grienauer, Esq.</h1>
						<p className="text-responsive-small">
							Real Estate Related Litigation in the Los Angeles County Area
						</p>
					</Col>
					<Col sm="12" xl="6" className="text-center">
						<h2 className="text-responsive-big">
							Call for a free consulatation:
						</h2>
						<h2 className="text-responsive-big">310-373-5944</h2>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TopJumbo;
