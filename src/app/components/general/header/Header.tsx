import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaHome,
  FaMagic,
  FaQuestionCircle,
} from "react-icons/fa";
import "./header.scss";
export default function Header() {
  return (
    <header id="header">
      <nav id="nav">
        <div className="left-nav">
          <Link href={"/"} className="btn btn-nav">
            <FaHome /> HOME
          </Link>
          <Link href={"/"} className="btn btn-nav">
            <FaMagic /> TALENTS
          </Link>
          <Link href={"/"} className="btn btn-nav">
            <FaQuestionCircle /> FAQ
          </Link>
        </div>
        <div className="right-nav">
          <Link href={"/"} className="btn nav-main">
            CONTACT ME! <FaArrowRight />
          </Link>
        </div>
      </nav>
    </header>
  );
}
