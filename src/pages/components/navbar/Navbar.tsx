import React from "react";
import navstyle from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={navstyle.nav}>
        <div className={navstyle.name}>
          <a style={{ textDecoration: "none" }} href="/">
            {" "}
            Blog Blog
          </a>
        </div>
        <div className={navstyle.rightNav}>
          <div className={navstyle.home}>
            <div className={navstyle.text}>
              <a style={{ textDecoration: "none" }} href="/">
                {" "}
                Home
              </a>
            </div>
          </div>
          <div className={navstyle.home}>
            <a
              style={{ textDecoration: "none" }}
              href="https://forms.gle/2Jdaiyf9yeuvc3cRA"
              target="blank"
            >
              <div className={navstyle.box}>Subscribe</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
