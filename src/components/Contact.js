import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ContactForm from './ContactForm';
import MapCard from './MapCard';

export default class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md="6" className="d-flex justify-content-center">
            <MapCard />
          </Col>
          <Col sm="12" md="6" className="d-flex justify-content-center">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
