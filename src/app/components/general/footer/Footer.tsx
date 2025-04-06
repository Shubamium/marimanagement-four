import React from "react";
import "./footer.scss";
import { FaCircle, FaCode, FaCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="footer-decors"></div>
      <footer id="footer">
        <div className="decors"></div>
        <div className="footer-stats">
          <div className="stats">
            <h2>
              50+
              <img src="/graphic/star1.png" alt="" className="star l" />
              <img src="/graphic/star1.png" alt="" className="star r" />
            </h2>

            <p>Vtuber Clients</p>
          </div>
          <div className="stats">
            <h2>
              3+
              <img src="/graphic/star1.png" alt="" className="star l" />
              <img src="/graphic/star1.png" alt="" className="star r" />
            </h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>

          {/* <div className="stats">
            <h2>
              000+ <img src="/graphic/star1.png" alt="" className="star l" />
              <img src="/graphic/star1.png" alt="" className="star r" />
            </h2>
            <p>Vtuber Clients</p>
          </div> */}
        </div>
        <div className="content">
          <div className="confine">
            <div className="info">
              <h3> VTuber Manager Services✦ </h3>
              <p>
                This service is a luxury and NOT a requirement to be a creator!
                If you are brand new, consider doing some self research! This is
                an optional clarity of mind as I will assist you in your content
                creation. I provide you support and ensure all your needs and
                goals are met!
              </p>

              <a
                href="https://x.com/SheepishMari"
                target="_blank"
                className="btn btn-secondary"
              >
                Contact Me!
              </a>
              <ul className="points">
                <li>
                  {" "}
                  <a href="mailto:mawissuh@marimanagement.com">
                    <FaCircle /> mawissuh@marimanagement.com
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://x.com/SheepishMari" target="_blank">
                    <FaXTwitter /> @SheepishMari
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <FaCopyright /> Marimanagement 2024
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://x.com/Shubamium2" target="_blank">
                    <FaCode /> Site Design By Shubamium
                  </a>
                </li>
              </ul>
            </div>
            <div className="art">
              <img src="/" alt="" className="footer-art" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
