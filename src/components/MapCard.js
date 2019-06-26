import React from 'react';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Map from './Map';

const MapCard = (props) => {
  return (
    <div>
      <Card className="mt-5">
        <Map />
        <CardBody>
          <CardTitle>Law Offices of John V. Grienauer</CardTitle>
          <CardText>609 Deep Valley Dr # 200, Rolling Hills Estates, CA 90274</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MapCard;
