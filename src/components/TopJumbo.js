import React from 'react';
import { Container } from 'reactstrap';

const TopJumbo = (props) => {
  return (
    <div>
      <Container fluid className="top-jumbo">
        <h1 className="">John V. Grienauer, Esq.</h1>
        <div class="">
          <p className="lead">Call Now:</p>
          <p>310-123-4567</p>
        </div>
      </Container>
    </div>
  );
};

export default TopJumbo;
