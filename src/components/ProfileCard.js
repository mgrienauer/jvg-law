import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const profilePicStyling = {
  height: '300px',
  width: '300px',
}

const ProfileCard = (props) => {
  return (
    <div>
      <Card style={{width: '300px'}}>
        <CardImg top width="100%" src={"/images/profile_pic.jpeg"} alt="Card image cap" style={profilePicStyling} />
        <CardBody>
          <CardTitle>John V. Grienauer, Esq.</CardTitle>
          <CardSubtitle>Los Angeles Real Estate Lawyer</CardSubtitle>
          <CardText>Providing excellent service for over 35 years.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileCard;
