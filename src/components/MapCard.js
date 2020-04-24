import React from "react";
import { Card, CardText, CardBody, CardTitle, Container } from "reactstrap";
import Map from "./Map";

const MapCard = (props) => {
	return (
		<Container>
			<Card className="mt-5">
				<Map />
				<CardBody>
					<CardTitle>Law Offices of John V. Grienauer</CardTitle>
					<CardText>
						609 Deep Valley Dr # 200, Rolling Hills Estates, CA 90274
					</CardText>
				</CardBody>
			</Card>
		</Container>
	);
};

export default MapCard;
