import { useState, React } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { withRouter } from "react-router";
import { checkName, checkEmpty, checkEmail, checkPhoneNumber } from './validations'
import orderStore from '../Data/OrderStore'
import { addOrder } from '../Server/OrdersService'

import './ShippingLogin.css'

const ShippingLogin = (props) => {
  const [state, setState] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    message: '',
    errors: {
      name: '',
      address: '',
      phone: '',
      email: '',
    }
  });

  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
  }

  function submitShipping(event) {
    const { name, address, phone, email, message ,ordersList } = state;
    const errors = {};
    errors.name = checkName(name);
    errors.address = checkEmpty(address);
    errors.phone = checkPhoneNumber(phone);
    errors.email = checkEmail(email);

    if (!errors.name && !errors.address && !errors.phone && !errors.email) {
      addOrder("shippingOrder", {
        name: name,
        address: address,
        phone_number: phone,
        email: email,
        message: message,
        ordersList: ordersList
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
              <p className="h5 text-center mb-4">Your Shipping Details</p>
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('name', e)} />
                {state.errors.name && <div className="error">{state.errors.name}</div>}
                <MDBInput label="Your address" icon="home" group type="text" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('address', e)} />
                {state.errors.address && <div className="error">{state.errors.address}</div>}
                <MDBInput label="Your phone" icon="phone" group type="text" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('phone', e)} />
                {state.errors.phone && <div className="error">{state.errors.phone}</div>}
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('email', e)} />
                {state.errors.email && <div className="error">{state.errors.email}</div>}
                <MDBInput type="textarea" outline rows="2" label="Comment" icon="pencil-alt" onChange={(e) => onInputChange('message', e)} />
              </div>
              <div className="text-center">
                <MDBBtn className="send-button" type="button" color="red" onClick={submitShipping}>Send</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default withRouter(ShippingLogin);