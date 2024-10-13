import React from "react";
import "./footer.scss";
import { FaCircle, FaDotCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-stats">
        <div className="stats">
          <h2>000+</h2>
          <p>Vtuber Clients</p>
        </div>
        <div className="stats">
          <h2>000+</h2>
          <p>Vtuber Clients</p>
        </div>

        <div className="stats">
          <h2>000+</h2>
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
                <a href="mailto:email">
                  <FaCircle /> email.mail@domain.com
                </a>
              </li>
              <li>
                {" "}
                <a href="mailto:email">
                  <FaCircle /> @twitter_handle
                </a>
              </li>
              <li>
                {" "}
                <a href="mailto:email">
                  <FaCircle /> @Marimanagement 2024
                </a>
              </li>
              <li>
                {" "}
                <a href="mailto:email">
                  <FaCircle /> Site Design By Shubamium
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
