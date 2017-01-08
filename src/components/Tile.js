import React from 'react';

const Tile = (props) => {
  const double = props.size === 2 ? '200px' : ''; 
  console.log(props.size, double)
  return (
    <div 
      style={{width: double}} 
      className='tile' 
    >
      <h5>
        { props.symbol }
      </h5>
    </div>
  );
}

export default Tile;
