import React from "react";
import Navbar from './components/Navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import ShippingLogin from './components/ShippingLogin'
import PickupLogin from './components/PickupLogin'
import Menu from './components/Menu';
import UserMessage from './components/UserMessage';
import TableReservation from './components/TableReservation';
import KosherCertificate from './components/KosherCertificate';
import Events from './components/Events'
import AdminLogin from './components/AdminLogin'
import ChooseTable from './components/ChooseTable'
import ShippingTable from './components/ShippingTable'
import ReservationTable from './components/ReservationTable'
import PickupTable from './components/PickupTable'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shippingLogin">
          <ShippingLogin />
        </Route>
        <Route path="/pickupLogin">
          <PickupLogin />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/userMessage">
          <UserMessage />
        </Route>
        <Route path="/tableReservation">
          <TableReservation />
        </Route>
        <Route path="/kosherCertificate">
          <KosherCertificate />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/login">
          <AdminLogin />
        </Route>
        <Route path="/chooseTable">
          <ChooseTable />
        </Route>
        <Route path="/pickupTable">
          <PickupTable />
        </Route>
        <Route path="/reservationTable">
          <ReservationTable />
        </Route>
        <Route path="/shippingTable">
          <ShippingTable />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;