import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ServiceDescript extends React.Component {
  render() {
    return (
      <Container>
        <Row className="d-flex">
          <Col lg="3" md="3" xs="6" className="service-card text-center mt-5">
            <h3 className="service-info-title text-responsive-small">Hands On</h3>
            <i className="fas fa-gavel info-icon fa-5x icon-responsive"></i>
          </Col>
          <Col lg="3" md="3" xs="6" className="service-card text-center mt-5">
            <h3 className="service-info-title text-responsive-small">Experienced</h3>
            <i className="fas fa-landmark fa-5x icon-responsive"></i>
          </Col>
          <Col lg="3" md="3" xs="6" className="service-card text-center mt-5">
            <h3 className="service-info-title text-responsive-small">Excellent Results</h3>
            <i className="fas fa-balance-scale fa-5x icon-responsive"></i>
          </Col>
          <Col lg="3" md="3" xs="6" className="service-card text-center mt-5">
            <h3 className="service-info-title text-responsive-small">Affordable</h3>
            <i className="fas fa-dollar-sign fa-5x icon-responsive"></i>
          </Col>
        </Row>
      </Container>
    )
  }
}
