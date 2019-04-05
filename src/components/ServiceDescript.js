import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ServiceDescript extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="3" className="service-card text-center mt-5">
            <h3 className="service-info-title">Hands On</h3>
            <i class="fas fa-gavel info-icon fa-5x"></i>
          </Col>
          <Col lg="3" className="service-card text-center mt-5">
            <h3 className="service-info-title">Experienced</h3>
            <i class="fas fa-landmark fa-5x"></i>
          </Col>
          <Col lg="3" className="service-card text-center mt-5">
            <h3 className="service-info-title">Excellent Results</h3>
            <i class="fas fa-balance-scale fa-5x"></i>
          </Col>
          <Col lg="3" className="service-card text-center mt-5">
            <h3 className="service-info-title">Affordable</h3>
            <i class="fas fa-dollar-sign fa-5x"></i>
          </Col>
        </Row>
      </Container>
    )
  }
}
