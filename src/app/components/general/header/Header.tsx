"use client";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaHome,
  FaMagic,
  FaQuestionCircle,
} from "react-icons/fa";
import "./header.scss";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const urlHas = (key: string) => {
    // const url = new URL(window.location.href).pathname;
    return pathname.includes(key);
  };
  const urlIs = (key: string) => {
    // const url = new URL(window.location.href).pathname;
    return pathname === key;
  };

  return (
    <header id="header">
      <nav id="nav">
        <div className="left-nav">
          <Link
            href={"/"}
            className={`btn btn-nav ${urlIs("/") ? "active" : ""}`}
          >
            <FaHome /> HOME
          </Link>
          <Link
            href={"/talents"}
            className={`btn btn-nav ${urlHas("/talents") ? "active" : ""}`}
          >
            <FaMagic /> TALENTS
          </Link>
          <Link
            href={"/faq"}
            className={`btn btn-nav ${urlHas("/faq") ? "active" : ""}`}
          >
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
