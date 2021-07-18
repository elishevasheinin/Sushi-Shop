import React from 'react'
import { MDBIcon } from 'mdbreact';

function NumberPicker({ onPlusPressed, onMinusPressed, number }) {

    return (      
      <div>
        <MDBIcon className="plus-circle" icon="plus" 
          onClick={onPlusPressed} />
        <label className="label-number">{number}</label>
        <MDBIcon className="minus-circle" icon="minus" 
          onClick={onMinusPressed} />
      </div>
    )
}

export default NumberPicker;