import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { observer } from 'mobx-react'

import './Navigation.css'
import adminStore from '../Data/Admin';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div className="formpage">
        <header className="header">
          <MDBNavbar color="#696969" dark expand="xs" >            ‏
              <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem className="nav-first-item nav-item">
                  <MDBNavLink to="/">Home </MDBNavLink>
                </MDBNavItem>
                <div className="pipe"></div>
                <MDBNavItem className="nav-first-item nav-item">
                  <MDBNavLink to="/menu">Menu </MDBNavLink>
                </MDBNavItem>
                <div className="pipe"></div>
                <MDBNavItem className="nav-first-item nav-item">
                  <MDBNavLink to="/contact">Contact </MDBNavLink>
                </MDBNavItem>
                <div className="pipe"></div>
                <MDBNavItem className="nav-first-item nav-item">
                  <MDBNavLink to="/events">Events </MDBNavLink>
                </MDBNavItem>
                <div className="pipe"></div>
                <MDBNavItem className="nav-first-item nav-item">
                  <MDBNavLink to="/tableReservation">Table Reservation </MDBNavLink>
                </MDBNavItem>
                <div className="pipe"></div>
                <MDBNavItem className="nav-first-item nav-item">
                  <MDBNavLink to="/kosherCertificate">Kosher Certificate </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem className="nav-admin">
                  <MDBNavLink className="admin-link" to={adminStore.isAdminMode ? "/chooseTable" : "/login" }><MDBIcon className="admin-icon" icon="user-tie" />  Admin</MDBNavLink>
                </MDBNavItem>
                {adminStore.isAdminMode &&
                <MDBNavItem className="nav-admin" onClick={() => adminStore.exitAdminMode()}>
                  <MDBNavLink className="admin-link" to="/"><MDBIcon className="admin-icon" icon="sign-out-alt" />  Logout</MDBNavLink>
                </MDBNavItem>}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div >
    );
  }
}

export default observer(Navbar);