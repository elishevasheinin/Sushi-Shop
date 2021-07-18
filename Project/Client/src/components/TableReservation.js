import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { Button } from "@material-ui/core";
import { withRouter } from 'react-router'
import RadioButton from './RadioButton'
import { checkName, checkEmpty, checkEmail, checkPhoneNumber, } from './validations'
import { addOrder } from '../Server/OrdersService'

import './TableReservation.css';

function TableReservation(props) {

  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
    date: '',
    time: '',
    number: '',
    table: 'outside',
    errors: {
      name: '',
      address: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      number: '',
    }
  });

  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
  }
  
  function setTableReservation(selected) {
    setState({ ...state, table: selected === 1 ? "outside" : "inside"})
  }

  function writeShipping(event) {
    const { name, phone, email, comment, date, time, number, table } = state;
    const errors = {};
    errors.name = checkName(name);
    errors.phone = checkPhoneNumber(phone);
    errors.email = checkEmail(email);
    errors.date = checkEmpty(date);
    errors.time = checkEmpty(time);
    errors.number = checkEmpty(number);

    if (!errors.name && !errors.phone && !errors.email && !errors.date && !errors.time && !errors.number) {
      addOrder("tableOrder", {
        name: name,
        phone_number: phone,
        email: email,
        comment: comment,
        date: date,
        time: time,
        number: number,
        table: table,
      });
      props.history.push('./userMessage');
    }

    setState({ ...state, errors: errors });
    event.preventDefault();
  }

  return (
    <div className="table-reservation">
      <div className="table-reservation-title"> TABLE RESERVATION </div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form className="table-reservation-form">
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('name', e)} />
                {state.errors.name && <div className="error">{state.errors.name}</div>}
                <MDBInput label="Your phone" icon="phone" group type="text" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('phone', e)} />
                {state.errors.phone && <div className="error">{state.errors.phone}</div>}
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('email', e)} />
                {state.errors.email && <div className="error">{state.errors.email}</div>}
                <MDBInput type="textarea" outline rows="2" label="Comment" icon="pencil-alt" onChange={(e) => onInputChange('comment', e)} />
                <MDBInput label="Date requested" icon="calendar-check" group type="date" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('date', e)} />
                {state.errors.date && <div className="error">{state.errors.date}</div>}
                <MDBInput label="Requested time" icon="clock" group type="time" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('time', e)} />
                {state.errors.time && <div className="error">{state.errors.time}</div>}
                <MDBInput label="Number of diners" icon="user-friends" group type="number" validate error="wrong"
                  success="right" onChange={(e) => onInputChange('number', e)} />
                {state.errors.number && <div className="error">{state.errors.number}</div>}
                <i class="fas fa-utensils fa-2x"> </i>
                <label className="favorite-table"> Favorite table</label>
                <div className="radio-wrapper">
                  <RadioButton onChange={setTableReservation}/>
                </div>
              </div>
              <div className="text-center">
                <Button className="order" variant="contained" color="secondary" onClick={writeShipping}> Order </Button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default withRouter(TableReservation);