"use client";
import { useState } from "react";
import "./faqDropdown.scss";
import { TbTriangleInvertedFilled } from "react-icons/tb";

type Props = {
  question: string;
  answer: string;
};
export default function FaqDropdown({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  const openclose = () => {
    setOpen((open) => !open);
  };

  return (
    <div className={`faq-dd ${open ? "open" : "closed"}`} onClick={openclose}>
      <div className="faq-dd-h">
        <svg
          width="123"
          height="40"
          viewBox="0 0 123 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="decor-mark"
        >
          <path d="M0 0H31L39 40H0V0Z" fill="#FF9345" />
          <path d="M48 0H73L82 40H48V0Z" fill="#FF9345" />
          <path d="M91.5 0H123V40H88L91.5 0Z" fill="#FF9345" />
        </svg>

        <h3>Q:{question}</h3>
        <button className="btn btn-open">
          <TbTriangleInvertedFilled />
        </button>
      </div>
      <div className="faq-dd-c">
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
}
