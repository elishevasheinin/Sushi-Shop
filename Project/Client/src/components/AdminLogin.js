import { React, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { withRouter } from "react-router";
import adminStore from "../Data/Admin";
import adminData from '../admin.json'

import './AdminLogin.css'

const Login = (props) => {
  const { history } = props;
  const [state, setState] = useState({
    name: '',
    password: '',
    error: ''
  });

  //setting the state
  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
  }

  function validateLogin(event) {
    const { name, password } = state;
    if (adminData.name === name && adminData.password === password) {
      history.push('./chooseTable');
      adminStore.enterAdminMode();
    }
    setState({
      name: '',
      password: '',
      error: 'User name or password are wrong'
    });
    event.preventDefault();
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form id="login" className="login-form">
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput label="Type admin name" icon="user"
               group type="text" value={state.name} onChange={(e) => onInputChange('name', e)} />
              <MDBInput label="Type your password" icon="lock" 
              group type="password" value={state.password} onChange={(e) => onInputChange('password', e)} />
            </div>
            {state.error && <div className="admin-error">{state.error}</div>}
            <div className="text-center" onClick={validateLogin}>
              <MDBBtn className="sendButton" type="submit" color="red">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default withRouter(Login);