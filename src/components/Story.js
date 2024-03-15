import React from "react";
import waffles from "../assests/img_7.jpeg";
import dog_1 from "../assests/img_1.jpeg";
import dog_2 from "../assests/img_2.jpeg";
import dog_3 from "../assests/img_3.jpeg";
import dog_4 from "../assests/img_4.jpeg";
import dog_5 from "../assests/img_5.jpeg";
import dog_6 from "../assests/img_6.jpeg";
import dog_7 from "../assests/img_8.jpeg";
import coon from "../assests/coon.jpeg";
import dane from "../assests/dane.webp";
import dane_2 from "../assests/dane_2.jpeg";

function Story() {
  return (
    // html
    <>
      <div className="story">
        {/* 1 */}
        <div className="acc_div">
          <img src={waffles} alt="cat" />
          <span>Waffles</span>
        </div>
        {/* 2 */}
        <div className="sto_div">
          <img src={dog_1} alt="cat" />
          <span>Jimmy</span>
        </div>
        {/* 3 */}
        <div className="sto_div">
          <img src={dog_2} alt="cat" />
          <span>Tommy</span>
        </div>
        {/* 4 */}
        <div className="sto_div">
          <img src={dog_3} alt="cat" />
          <span>Jhonny</span>
        </div>
        {/* 5 */}
        <div className="sto_div">
          <img src={dog_4} alt="cat" />
          <span>Cookie</span>
        </div>
        {/* 6 */}
        <div className="sto_div">
          <img src={dog_5} alt="cat" />
          <span>Hunter</span>
        </div>
        {/* 7 */}
        <div className="sto_div">
          <img src={dog_6} alt="cat" />
          <span>Ginger</span>
        </div>
        {/* 8 */}
        <div className="sto_div">
          <img src={dog_7} alt="cat" />
          <span>Mike</span>
        </div>
        {/* 9 */}
        <div className="sto_div">
          <img src={coon} alt="cat" />
          <span>Charles</span>
        </div>
        {/* 10 */}
        <div className="sto_div">
          <img src={dane} alt="cat" />
          <span>Tyson</span>
        </div>
        {/* 11 */}
        <div className="sto_div">
          <img src={dane_2} alt="cat" />
          <span>Spike</span>
        </div>
      </div>
      <div className="border"></div>
    </>
  );
}

export default Story;
