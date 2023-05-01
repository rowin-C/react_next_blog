import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.blank}> </div>
        <div className={style.text}>Made with ❤️ by Saubhagya </div>
        <div className={style.icons}>
          <div className={style.icon}>
            <a href="https://twitter.com/rowin_dev" target="blank">
              <img
                style={{ height: "50px", width: "50px" }}
                className={style.twi}
                src="\images\twi.png"
                alt="twitter logo"
              />
            </a>
          </div>
          <div className={style.icon1}>
            <a href="https://github.com/rowin-C" target="blank">
              <img
                style={{ height: "55px", width: "55px" }}
                className={style.git}
                src="\images\gitlogo.png"
                alt="github logo"
              />
            </a>
          </div>
          <div className={style.icon2}>
            <a href="https://portfolio-rowinc.vercel.app/" target="blank">
              <img
                style={{ height: "80px", width: "80px", translate: "-11px" }}
                className={style.per}
                src="\images\logo.png"
                alt="website logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
