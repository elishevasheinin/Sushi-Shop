import React from "react";
import './Home.css';

const Home = (props) => {
  const { history } = props;

  return (
    <div className="home">
      <div className="first-line">
        <div className="home-item home-menu" 
             onClick={() => history.push("/menu")}>MENU</div>
        <div className="home-item home-reservation" 
            onClick={() => history.push("/tableReservation")}>TABLE RESERVATION</div>
        <div className="home-item home-events" 
            onClick={() => history.push("/events")}>EVENTS</div>
      </div>
      <div className="second-line">
        <div className="home-item home-contact"
            onClick={() => history.push("/contact")}>CONTACT US</div>
        <div className="home-item home-certificates"
            onClick={() => history.push("/kosherCertificate")}>KOSHER CERTIFICATE</div>
      </div>
    </div>
  );
};

export default Home;