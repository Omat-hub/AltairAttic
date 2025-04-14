import React from "react";
import "./Details.css";
import { MdCall } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const handleCallClick = () => {
    window.location.href = "tel:2347077195098";
  };

  const handleChatClick = () => {
    window.open("https://api.whatsapp.com/send?phone=2347077195098", "_blank");
  };

  const handleVideoCallClick = () => {
    window.open("https://www.instagram.com/altairattic", "_blank");
  };

  const handleSmsClick = () => {
    window.open("sms:2347077195098", "_blank");
  };

  return (
    <div id="contact-us" className="c-wrapper ">
      <div className="paddings innerWidth flexCenter c-container relative ">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="primaryText">CONTACT US</span>
          {/*           <span className="primaryText">Easy to contact us</span>
           */}{" "}
          <span className="secondaryText">
            We provide the best services, believing advanced technology enhances
            life. At Altair Attic Limited, we bridge the gap between technology
            and everyday life.
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+2347077195098</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleCallClick}>
                  Call now
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whatsapp</span>
                    <span className="secondaryText">+2347077195098</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleChatClick}>
                  Chat now
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">Altair Attic</span>
                  </div>
                </div>
                <div
                  className="flexCenter button"
                  onClick={handleVideoCallClick}
                >
                  Chat now
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+2347077195098</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleSmsClick}>
                  Message now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container ">
            <img src="./contact.jpeg" alt="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
