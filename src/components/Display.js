import React from 'react';

const Display = (props) => {
  return (
    <div className="display">
      <h5 key="h1" className="display_text">
        {props.currentDisplay}       
      </h5>
    </div>
  );
}

export default Display;

