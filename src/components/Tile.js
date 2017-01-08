import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Tile = (props) => {
  const double = props.size === 2 ? '200px' : ''; 
  console.log(props.size, double)
  return (
    <div 
      style={{width: double}} 
      className={`tile ${props.kind}`} 
    >
      <h5>
        { props.symbol }
      </h5>
    </div>
  );
}

export default Tile;
