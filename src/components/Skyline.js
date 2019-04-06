import React from 'react';

const skyline_img = '/images/skyline.jpg';

const skylineStyle = {
  backgroundImage: `url(${skyline_img})`,
  backgroundColor: 'bg-dark',
  height: 'calc(100vh - 256px)',
  backgroundSize: 'cover',
  transformOrigin: 'center'
}

export default function Skyline() {
  return (
    <div style={skylineStyle}>
      
    </div>
  )
}

