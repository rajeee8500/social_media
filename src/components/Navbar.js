import React from "react";
import like from "../assests/like.png";
import messaging from "../assests/messaging.png";
import post from "../assests/addPost.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <span>Sociosphere</span>
        </div>
        <div className="right">
          <img src={like} alt="like" />
          <img src={messaging} alt="like" />
          <img src={post} alt="post" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
