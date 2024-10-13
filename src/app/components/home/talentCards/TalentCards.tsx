import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TalentCards() {
  return (
    <div className="talent-current-c">
      <button className="btn btn-control btn-secondary">
        <FaArrowLeft />
      </button>
      <div className="list">
        <a href="#" className="talent-card btn">
          <div className="info">
            <div className="pfp">
              <img src="/" alt="" />
            </div>
            <p>@person_name</p>
          </div>
          <div className="quote">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”
            </p>
          </div>
        </a>
        <a href="#" className="talent-card btn">
          <div className="info">
            <div className="pfp">
              <img
                src="https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg"
                alt=""
              />
            </div>
            <p>@person_name</p>
          </div>
          <div className="quote">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”
            </p>
          </div>
        </a>
        <a href="#" className="talent-card btn">
          <div className="info">
            <div className="pfp">
              <img src="/" alt="" />
            </div>
            <p>@person_name</p>
          </div>
          <div className="quote">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”
            </p>
          </div>
        </a>
      </div>
      <button className="btn btn-control btn-secondary">
        <FaArrowRight />
      </button>
    </div>
  );
}
