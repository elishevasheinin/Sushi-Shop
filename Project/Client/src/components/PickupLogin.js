import { useState, React } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { withRouter } from "react-router";
import { checkName, checkPhoneNumber } from './validations'
import orderStore from '../Data/OrderStore'
import { addOrder } from '../Server/OrdersService'

import './ShippingLogin.css'

const PickupLogin = (props) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    message: '',
    errors: {
      name: '',
      phone: '',
    }
  });

  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
  }

  function submitShipping(event) {
    const { name, phone, message } = state;
    const errors = {};
    errors.name = checkName(name);
    errors.phone = checkPhoneNumber(phone);

    if (!errors.name && !errors.phone) {
      addOrder("pickupOrder", {
        name: name,
        phone_number: phone,
        message: message,
      }, orderStore.orderList);
      orderStore.clearOrderList();
      props.history.push('/userMessage');
    }

    setState({ ...state, errors: errors });
    event.preventDefault();
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form className="login-form">
            <p className="h5 text-center mb-4">Your Details</p>
            <div className="grey-text">
              <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" onChange={(e) => onInputChange('name', e)} />
              {state.errors.name && <div className="error">{state.errors.name}</div>}
              <MDBInput label="Your phone" icon="phone" group type="text" validate error="wrong"
                success="right" onChange={(e) => onInputChange('phone', e)} />
              {state.errors.phone && <div className="error">{state.errors.phone}</div>}
              <MDBInput type="textarea" outline rows="2" label="Comment" icon="pencil-alt" onChange={(e) => onInputChange('message', e)} />
            </div>
            <div className="text-center">
              <MDBBtn className="send-button" type="button" color="red" onClick={submitShipping}>Send</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      <div className="pickup-message">We are waiting for you to pickup your order in our resturant at 
        <span className="bold-street"> Misadot Street no. 7 </span>
      </div>
    </MDBContainer>
  );
};

export default withRouter(PickupLogin);