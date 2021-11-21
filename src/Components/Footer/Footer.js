import React from 'react';
import './Footer.css'
const Footer = () => {
        return (
          <div className="footer-bg">
            <div className="d-lg-flex justify-content-center p-lg-5">
              <div>
                <p>Chicago, IL</p>
                <p>60606 123, New Lenox</p>
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/FKWZgSy/logo-7-142x54.png"
                />
              </div>
              <div>
                <p>Call us 24/7</p>
                <p>094 711 80 58</p>
              </div>
            </div>
            <p>developermahmud © 2021. All rights reserved.</p>
          </div>
        );
};

export default Footer;