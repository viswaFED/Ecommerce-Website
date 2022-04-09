import React, { Fragment } from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <Fragment>
      <h1 style={{ fontFamily: "Times New Roman", textAlign: "center" }}>
        Contact us
      </h1>
      <form className="container">
        <div className="form">
          <div className="formdetails">
            <label>Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Joe"
            />
          </div>
          <br />
          <div className="formdetails">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@corp.com"
             
            />
          </div>
          <div className="formdetails">
            <label>Phone no</label>
            <input type="number" 
            placeholder="666666666"/>
          </div>
          <div className="">
            <label className="msglabel">Message</label>
            <textarea
              placeholder="Message"
              name="message"
              className="msginput"
            ></textarea>
          </div>
        <div >
          <button className="Contactbutton"> submit</button>
        </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Contact;
