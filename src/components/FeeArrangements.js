import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeeTabs from './FeeTabs';

export default function FeeArrangements() {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size:10, offset:1 }} className="mt-5">
          <h3 className="text-center">Fees and Costs</h3>
          <h5>
            Clients can make fee arrangements in one of three ways; hourly rate, flat fee, or flat fee plus contingency.  Costs are billed the same regardless of the attorney fee arrangements.
          </h5>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" lg={{ size:10, offset:1 }}>
          <FeeTabs />
        </Col>
      </Row>
    </Container>
  )
}
