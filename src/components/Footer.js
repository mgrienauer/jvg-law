import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const footerStyle = {
  height: '150px',
  alignItems: 'center',
  margin: '0'
};

export default function Footer(props) {
  return (
    <footer className="footer bg-dark mt-5">
      <Container style={props.appWidth}>
        <Row style={footerStyle}>
          <Col>
            <p>hello</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
