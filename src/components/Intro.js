import React from 'react'
import { Container, Row, Col } from 'reactstrap';  
import Video from './Video'   
import Headshot from './Headshot' 

export default function Intro(props) {
  return (
    <Container>
        <Row className="mt-3" id="intro">
            <Col lg={{ size: 7, offset: 1 }} sm="12">
                <Video />
            </Col>
            <Col lg="4" sm="12" className="mt-4 d-flex justify-content-center">
              <Headshot />
            </Col>
        </Row>
    </Container>
  )
}
