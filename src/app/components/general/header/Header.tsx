"use client";
import Link from "next/link";
import React from "react";
import { FaHome, FaMagic, FaQuestionCircle } from "react-icons/fa";
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
    <div className="header-container">
      <header id="header">
        <nav id="nav">
          <div className="left-nav">
            <Link
              href={"/"}
              className={`btn btn-nav ${urlIs("/") ? "active" : ""}`}
            >
              <FaHome /> <span>HOME</span>
            </Link>
            <Link
              href={"/talents"}
              className={`btn btn-nav ${urlHas("/talents") ? "active" : ""}`}
            >
              <FaMagic /> <span>TALENTS</span>
            </Link>
            <Link
              href={"/faq"}
              className={`btn btn-nav ${urlHas("/faq") ? "active" : ""}`}
            >
              <FaQuestionCircle /> <span>FAQ</span>
            </Link>
          </div>
          <div className="right-nav">
            <Link
              target="_blank"
              href={"https://x.com/SheepishMari"}
              className="btn nav-main"
            >
              CONTACT ME!
              <img src="/graphic/white_star_l.png" alt="" className="star r" />
              <img src="/graphic/white_star_l.png" alt="" className="star l" />
              <img
                src="/graphic/white_star_l.png"
                alt=""
                className="star l smoll"
              />
              {/* <img src="/graphic/white_star_l.png" alt="" className="star lb" /> */}
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
