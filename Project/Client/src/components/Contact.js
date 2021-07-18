import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div  >
      <div className="contact-title">CONTACT US</div>
      <div className="contact-text">
        <div className="text-title">Our Contact Info: </div>
        <div>
          <span className="text-subtitle">E-mail: </span>
          sushi.sales@gmail.com
        </div>
        <div>
          <span className="text-subtitle"> WhatsApp: </span>
          +972544123452
         </div>
        <div className="break-line">Send your order and it will be on its way to you. </div>
        <duv>Book an event and we will close the hall for you. </duv>
        <div>Book a table and we will keep the chairs for you, </div>
        <div>Order a delivery and it is already on its way to you </div>
        <div>A personal representative will stand in front of you. </div>
        <div>We have a human response 24/6 </div>

        <div className="break-line">Send us an email or WhatsApp with your order details</div>
      </div>
    </div>
  );
};

export default Contact;