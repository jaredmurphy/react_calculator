import React from 'react';

const Display = () => {
  // the h3 should show the numbers or symbols in the calculator display
  // where should this information be coming from?
  // does this need to be a class component?
  return (
    <div className="display">
      <h5 key="h1" className="display_text">
        3.14        
      </h5>
    </div>
  );
}

export default Display;

