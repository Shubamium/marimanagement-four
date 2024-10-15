import React from "react";
import "./footer.scss";
import { FaCircle, FaCode, FaCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-stats">
        <div className="stats">
          <h2>
            000+
            <img src="/graphic/star1.png" alt="" className="star l" />
            <img src="/graphic/star1.png" alt="" className="star r" />
          </h2>

          <p>Vtuber Clients</p>
        </div>
        <div className="stats">
          <h2>
            000+
            <img src="/graphic/star1.png" alt="" className="star l" />
            <img src="/graphic/star1.png" alt="" className="star r" />
          </h2>
          <p>Vtuber Clients</p>
        </div>

        <div className="stats">
          <h2>
            000+ <img src="/graphic/star1.png" alt="" className="star l" />
            <img src="/graphic/star1.png" alt="" className="star r" />
          </h2>
          <p>Vtuber Clients</p>
        </div>
      </div>
      <div className="content">
        <div className="confine">
          <div className="info">
            <h3> MORE TAGLINE!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>

            <button className="btn btn-secondary">Contact Me!</button>
            <ul className="points">
              <li>
                {" "}
                <a href="mailto:sheepishmage@gmail.com">
                  <FaCircle /> sheepishmage@gmail.com
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
  );
}
