import React from 'react';

const skyline_img = '/images/skyline.jpg';

const skylineStyle = {
  backgroundImage: `url(${skyline_img})`,
  backgroundColor: 'salmon',
  height: 'calc(100vh - 256px)',
  backgroundSize: 'cover'
}

export default function Skyline() {
  return (
    <div style={skylineStyle}>
      
    </div>
  )
}

