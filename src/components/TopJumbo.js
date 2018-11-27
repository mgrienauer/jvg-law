import React from 'react';
import { Container } from 'reactstrap';

const topJumboStyle = {
  height: '200px',
  alignItems: 'center',
  display: 'flex',
  backgroundImage: 'linear-gradient(to right, white , #a8f3ff, white )'
};

const TopJumbo = (props) => {
  return (
    <div style={topJumboStyle}>
      <Container fluid className="top-jumbo">
        <div className="float-left">
          <h1>John V. Grienauer, Esq.</h1>
          <p>Serving the Los Angeles Area</p>
        </div>
        <div class="float-right">
          <h2>Call for a free consulatation:</h2>
          <h2 className="text-center">310-123-4567</h2>
        </div>
      </Container>
    </div>
  );
};

export default TopJumbo;
