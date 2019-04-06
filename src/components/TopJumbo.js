import React from 'react';
import { Container } from 'reactstrap';

const topJumboStyle = {
  height: '200px',
  alignItems: 'center',
  display: 'flex',
};

const TopJumbo = (props) => {
  return (
    <div style={topJumboStyle} className="bg-light">
      <Container fluid className="top-jumbo" style={props.appWidth}>
        <div className="float-left text-center">
          <h1 className="text-responsive-big">John V. Grienauer, Esq.</h1>
          <p className="text-responsive-small">Serving the Los Angeles Area</p>
        </div>
        <div className="float-right text-center">
          <h2 className="text-responsive-big">Call for a free consulatation:</h2>
          <h2 className="text-responsive-big">310-123-4567</h2>
        </div>
      </Container>
    </div>
  );
};

export default TopJumbo;
