import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProfileCard from './ProfileCard';

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="6" sm="12" className="d-flex justify-content-center mt-5">
            <ProfileCard />
          </Col>
          <Col lg="6" sm="12" className="mt-5">
            <h3 className="text-center">About John V. Grienauer</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus ipsum lectus, dignissim vulputate metus suscipit ut. Suspendisse molestie nibh eget volutpat hendrerit. Quisque efficitur ipsum dolor, at efficitur enim mollis vitae. Mauris et tellus suscipit diam porttitor malesuada. Etiam consequat lacinia nulla, ut tempor massa semper et. Mauris consectetur diam nec ipsum suscipit, eget lacinia ipsum dignissim. Ut id lacinia mi.
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus ipsum lectus, dignissim vulputate metus suscipit ut. Suspendisse molestie nibh eget volutpat hendrerit. Quisque efficitur ipsum dolor, at efficitur enim mollis vitae. Mauris et tellus suscipit diam porttitor malesuada. Etiam consequat lacinia nulla, ut tempor massa semper et. Mauris consectetur diam nec ipsum suscipit, eget lacinia ipsum dignissim. Ut id lacinia mi.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
