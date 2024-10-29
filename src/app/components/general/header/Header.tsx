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
              href={
                "https://x.com/messages/1379171069043564552-1608144670852534272?recipient_id=1379171069043564552&text=Hi%2C%20I%27m%20interested%20in%20hiring%20you%20as%20my%20manager.%20Could%20we%20discuss%20further%20details%3F%20%F0%9F%AA%84%F0%9F%8C%9F%20%F0%9F%93%8B"
              }
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
