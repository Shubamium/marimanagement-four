"use client";
import { urlFor } from "@/app/db/db";
import React, { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const mockData = ["a", "b", "c", "d", "f", "e", "g"];
type Props = {
  tList: any[];
};
export default function TalentCards({ tList }: Props) {
  const [page, setPage] = useState(0);

  const pageData = [];
  const toChop = [...tList];
  while (toChop.length > 0) {
    pageData.push(toChop.splice(0, 3));
    console.log("chopping");
  }

  const next = () => {
    setPage((page) => page + 1);
  };

  const prev = () => {
    setPage((page) => page - 1);
  };
  console.log(toChop);
  return (
    <div className="talent-current-c">
      <button className="btn btn-control btn-secondary" onClick={prev}>
        <FaArrowLeft />
      </button>
      <div className="list">
        {pageData.length !== 0 &&
          pageData[page % pageData.length] &&
          pageData[page % pageData.length].map((data: any, i: number) => {
            return (
              <a
                href={data.link}
                className="talent-card btn"
                target="_blank"
                key={"talent" + i}
              >
                <div className="info">
                  <div className="pfp">
                    <img src={urlFor(data.pfp).url()} alt="talent-img" />
                  </div>
                  <p>{data.name}</p>
                </div>
                <div className="quote">
                  <p>"{data.testimonial}"</p>
                </div>
              </a>
            );
          })}

        {/* <a href="#" className="talent-card btn">
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
        </a> */}
      </div>
      <button className="btn btn-control btn-secondary" onClick={next}>
        <FaArrowRight />
      </button>
    </div>
  );
}
