import React, { Component } from 'react';
import { MDBFormInline, MDBInput } from 'mdbreact';

class RadioButton extends Component {
  state = {
    radio: 1
  };

  onClick = selected => () => {
    this.setState({
      radio: selected
    });
    this.props.onChange(selected);
  };

  render() {
    return (
      <MDBFormInline>
        <MDBInput
          onClick={this.onClick(1)}
          checked={this.state.radio === 1 ? true : false}
          label='Outside'
          type='radio'
          id='radio1'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick(2)}
          checked={this.state.radio === 2 ? true : false}
          label='Inside'
          type='radio'
          id='radio2'
          containerClass='mr-5'
        />
      </MDBFormInline>
    );
  }
}

export default RadioButton;