import React from 'react'
import { Container, Row, Col } from 'reactstrap';  
import Video from './Video'    

export default function Intro() {
  return (
    <Container>
        <Row className="mt-5">
            <Col sm="12" lg={{ size: 6, offset: 1 }}>
                <Video />
            </Col>
        </Row>
    </Container>
  )
}
