"use client";
import { useState } from "react";
import "./faqDropdown.scss";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export default function FaqDropdown() {
  const [open, setOpen] = useState(false);
  const openclose = () => {
    setOpen((open) => !open);
  };

  return (
    <div className={`faq-dd ${open ? "open" : "closed"}`} onClick={openclose}>
      <div className="faq-dd-h">
        <h3>Q:Write the question here?</h3>
        <button className="btn btn-open">
          <TbTriangleInvertedFilled />
        </button>
      </div>
      <div className="faq-dd-c">
        <p className="answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt.
        </p>
      </div>
    </div>
  );
}
