import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Row className="mt-5" id="services">
          <Col lg={{ size: 10, offset: 1 }} sm="12" className="mt-2">
            <h3 className="text-center">Law Offices of John V. Grienauer</h3>
            <p className="mt-3">
              John Grienauer has been an attorney practicing civil litigation primarily in Los Angeles County, California for over 40 years during which time 35 years has been spent as a sole practitioner. <strong>Mr. Grienauer's practice is exclusively focused on litigation involving disputes over title to property and disputes over leases with rental values in excess of $25,000 per month.</strong>
              <br/><br/>Born, raised, and educated in Los Angeles, Mr. Grienauer graduated from Loyola High School of Los Angeles, the University of Southern California, and Loyola Law School of Los Angeles.  Mr. Grienauer has been a licensed California Real Estate Broker for over 25 years, in addition to being licensed to practice law, and has just recently retired as owner of a real estate mortgage company which was owned and operated by him since 1991, Millennium Mortgage.
              <br/><br/>Over the course of his career , Mr. Grienauer's clients have enjoyed a success rate of over 90%, with success being defined as settlement or verdict meeting or exceeding the targets set by Mr. Grienauer and his client in the subject matter.  His expertise in real estate has enhanced his legal practice. He is primarily engaged in the resolution of real estate related disputes which are primarily disputes focused on rights of title to property and disputes involving leases with the rental values over $25,000.00 per month.    
              <br/><br/>You may be assured that upon retention of Mr. Grienauer's  services he will personally be the attorney that attends:  all court hearings on your behalf, all settlement conferences, all mediations, all arbitrations, and all trials.  He will be the attorney that makes all phone calls on your behalf and provides all the final edits on any pleadings or writings presented on your behalf.  In short, if your retain Mr. Grienauer's  services your legal matter will be handled by him and will have the advantage of his forty years of litigation and real estate related experience through every step of the process.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
