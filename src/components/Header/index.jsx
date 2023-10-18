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
          <Iconify icon={"basil:facebook-solid"} width={25} />
          <Iconify icon={"ic:baseline-whatsapp"} width={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
