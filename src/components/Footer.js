import React from "react";
import { Container, Row, Col } from "reactstrap";

const footerStyle = {
	height: "150px",
	alignItems: "center",
	margin: "0",
	marginBottom: "0",
	bottom: "0",
	paddingTop: "20px",
	width: "100%",
};

export default function Footer(props) {
	return (
		<footer style={footerStyle} className="footer bg-dark mt-5">
			<Container style={props.appWidth}>
				<Row>
					<Col mb-0>
						<p className="text-white text-center">
							John Vincent Grienauer, Esq. &nbsp;•&nbsp; 310-373-5944
							&nbsp;•&nbsp; john.grienauer@cox.net
						</p>
						<p className="text-white text-center">
							609 Deep Valley Dr # 200, Rolling Hills Estates, CA 90274
						</p>
						<p className="text-white text-center">
							© 2019 John Vincent Grienauer
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
