"use client";
import { urlFor } from "@/app/db/db";
import React, { FormEvent, useRef, useState } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const mockData = ["a", "b", "c", "d", "f", "e", "g"];
type Props = {
  tList: any[];
};
export default function TalentCards({ tList }: Props) {
  const [page, setPage] = useState(0);
  const [isChangingPage, setIsChangingPage] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const pageData = [];
  const toChop = [...tList];
  while (toChop.length > 0) {
    pageData.push(toChop.splice(0, 4));
    console.log("chopping");
  }

  const at = 1500;
  const next = () => {
    if (toChop.length <= 1 || isChangingPage) return;
    setIsChangingPage(true);
    setTimeout(() => {
      setPage((page) => page + 1);
      setIsChangingPage(false);
    }, at);
  };

  const prev = () => {
    if (toChop.length <= 1 || isChangingPage) return;

    setIsChangingPage(true);
    setTimeout(() => {
      setPage((page) => page - 1);
      setIsChangingPage(false);
    }, at);
  };
  const index = Math.max(Math.abs(page % pageData.length), 0);
  console.log(pageData, index, pageData.length, page % (pageData.length + 1));

  return (
    <>
      <div className="talent-current-c">
        <button className="btn btn-control btn-secondary" onClick={prev}>
          <FaArrowLeft />
        </button>
        <div className={`list ${isChangingPage ? "changing" : "notChanging"}`}>
          {pageData.length !== 0 &&
            pageData[index] &&
            pageData[index].map((data: any, i: number) => {
              return (
                <a
                  href={data.link}
                  className="talent-card btn"
                  target="_blank"
                  key={"talent" + data._id}
                >
                  <div className="info">
                    <div className="pfp">
                      <img
                        src={data.pfp && urlFor(data.pfp).url()}
                        alt="talent-img"
                      />
                    </div>
                    <p>{data.name}</p>
                  </div>
                  <div className="quote">
                    <p>&rdquo;{data.testimonial}&rdquo;</p>
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
      <div className="alternate-control">
        <button className="btn btn-control btn-secondary" onClick={prev}>
          <FaArrowLeft />
        </button>
        <button className="btn btn-control btn-secondary" onClick={next}>
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
