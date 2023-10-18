import Image from "next/image";
import React from "react";
import Iconify from "../Iconify";

function Footer() {
  return (
    <div>
      <div className="info-footer">
        {/* <Image src="/logo.png" alt="iem-logo" width={150} height={150} /> */}
        <div className="infos">
          <div className="info-wapper">
            <Iconify
              icon={"carbon:location"}
              width={50}
              style={{ color: "#42763a" }}
            />
            <p>GP5 km 14.5 mornaguia</p>
          </div>
          <div className="info-wapper">
            <Iconify
              icon={"solar:phone-outline"}
              width={50}
              style={{ color: "#42763a" }}
            />
            <p> +216 50487931</p>
          </div>
          <div className="info-wapper">
            <Iconify
              icon={"line-md:email"}
              width={50}
              style={{ color: "#42763a" }}
            />
            <p> Iem.2019@Yahoo.Com</p>
          </div>
        </div>
      </div>
      <footer className="copyright-footer">
        © Copyright IEM, Installation électrique & Maintenance
      </footer>
    </div>
  );
}

export default Footer;
