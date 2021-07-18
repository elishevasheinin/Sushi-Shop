import React from "react";

import kosherImage from '../images/kosherCertificate.png'
import './KosherCertificate.css';

const KosherCertificate = () => {
  return (
    <div className="kosher-certificate">
      <div className="kosher-certificate-title">KOSHER CERTIFICATE</div>
      <img className="kosher-certificate-img" src={kosherImage} alt="kosher-img" />
    </div>
  )
};

export default KosherCertificate;