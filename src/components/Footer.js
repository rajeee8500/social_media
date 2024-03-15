import React from "react";
import home from "../assests/home.png";
import search from "../assests/search.png";
import reel from "../assests/reel.png";
import shop from "../assests/shop.png";
import waffles from "../assests/img_7.jpeg";

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={home} alt="button" />
        <img src={search} alt="button" />
        <img src={reel} alt="button" />
        <img src={shop} alt="button" />
        <div>
          <img src={waffles} alt="button" className="acc" />
          <div className="color"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
