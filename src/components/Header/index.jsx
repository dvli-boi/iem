import React from "react";
import Iconify from "../Iconify";

const Header = () => {
  return (
    <div className="header">
      <div className="small-header container">
        <div className="left-section">
          <div className="icon-social">
            <Iconify icon={"material-symbols:mail-outline"} />
            <a href="mailto:iem.2019@yahoo.com">
              <p>iem.2019@yahoo.com</p>
            </a>
          </div>
          <div className="icon-social">
            <Iconify icon={"ph:phone"} />
            <a href="Tel: +216 50487931">
              <p>+216 50487931</p>
            </a>
          </div>
        </div>
        <div className="right-section">
          <a
            href="https://www.facebook.com/profile.php?id=100083150537986"
            target="_blank"
            rel="noopener"
          >
            <Iconify
              icon={"basil:facebook-solid"}
              width={25}
              style={{ color: "white" }}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100083150537986"
            target="_blank"
            rel="noopener"
          >
            <Iconify
              icon={"ic:baseline-whatsapp"}
              width={25}
              style={{ color: "white" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
