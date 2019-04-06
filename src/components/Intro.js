import React from 'react'
import { Container, Row, Col } from 'reactstrap';  
import Video from './Video'    

export default function Intro(props) {
  return (
    <Container>
        <Row className="mt-3" id="intro">
            <Col lg="6" sm="12">
                <Video />
            </Col>
        </Row>
    </Container>
  )
}
