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
