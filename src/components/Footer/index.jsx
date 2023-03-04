import React, { useContext } from "react";
import "./style.scss";
import Logo from "../../imgs/logo.png";
import { ThemeContext } from "../../hooks/ToggleContext";
const Footer = () => {
  const contextTheme = useContext(ThemeContext);
  return (
    <div className={`footer ${contextTheme.theme}`}>
      <div className="container">
        <div className="col">
          <div className="footer-logo">
            <img src={Logo} alt="" />
            <p className="footer-logo__name">Joker Blog</p>
          </div>
          <p>© 2023, All Rights Reserved.</p>
          <p>
            Powered By{" "}
            <a className="footer-auth" href="https:/fb.com/ilovetechnologys">
              Le Phuc Thanh
            </a>{" "}
          </p>
        </div>
        <div className="col">
          <h3 className="footer-links">Quick Links</h3>
          <ul>
            <li>Advertise with us</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col">
          <h3 className="footer-categories">Categories</h3>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="col">
          <h3>Social Media</h3>
          <ul>
            <li>Github</li>
            <li>Facebook</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
