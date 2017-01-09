import React, { Component }from 'react';
import Tile from './Tile';
import data from '../data';

class NumberPad extends Component{

 renderTiles() {
   return data.map(tile => {
     return (
      <Tile 
        key={tile.id} 
        size={tile.size ? tile.size : ''} 
        symbol={tile.symbol} 
        number={tile.number}
        handleClick={this.props.handleClick}
      />
     )
   });
 }
 
 render() {
  return (
    <div className="number_pad">
      { this.renderTiles() }
    </div>
  )
 }
}

export default NumberPad;
