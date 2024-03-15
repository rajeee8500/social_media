import React from "react";
import hunter from "../assests/img_5.jpeg";
import more from "../assests/more.png";
import hunter_1 from "../assests/hunter_1.jpeg";
import like_2 from "../assests/like_2.png";
import message_2 from "../assests/message_2.png";
import share from "../assests/share.png";
import save from "../assests/save.png";
import dog from "../assests/dog.jpeg";
import img_8 from "../assests/img_8.jpeg";
import dane from "../assests/dane.webp";
import dane_2 from "../assests/dane_2.jpeg";
import dane_3 from "../assests/dane_3.webp";
import coon_1 from "../assests/coon_1.jpeg";
import coon from "../assests/coon.jpeg";
import retr from "../assests/retreiver.webp";
import dog_1 from "../assests/img_1.jpeg";
import cat from "../assests/cat.webp";
import thomas from "../assests/thomas.jpeg";

function Posts() {
  return (
    <>
      <div className="posts">
        {/* 1 */}
        <div className="post">
          <div className="top">
            <div className="top_right">
              <img src={hunter} alt="hunter" />
              <span>Hunter</span>
            </div>
            <img src={more} alt="more" />
          </div>
          <div className="middle">
            <img src={hunter_1} alt="hunter" />
          </div>
          <div className="bottom">
            <div className="bottom_left">
              <img src={like_2} alt="like" />
              <img src={message_2} alt="like" />
              <img src={share} alt="like" />
            </div>
            <img src={save} alt="save" />
          </div>
          <div className="user">
            <span className="likes">
              <b>100 Likes</b>
            </span>
            <span className="caption">
              <span>
                <b>Hunter</b>
                &nbsp;Meow!!
              </span>
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="post">
          <div className="top">
            <div className="top_right">
              <img src={img_8} alt="hunter" />
              <span>Mike</span>
            </div>
            <img src={more} alt="more" />
          </div>
          <div className="middle">
            <img src={dog} alt="hunter" />
          </div>
          <div className="bottom">
            <div className="bottom_left">
              <img src={like_2} alt="like" />
              <img src={message_2} alt="like" />
              <img src={share} alt="like" />
            </div>
            <img src={save} alt="save" />
          </div>
          <div className="user">
            <span className="likes">
              <b>90 Likes</b>
            </span>
            <span className="caption">
              <span>
                <b>Mike</b>
                &nbsp;Woof!!
              </span>
            </span>
          </div>
        </div>
        {/* 3 */}
        <div className="post">
          <div className="top">
            <div className="top_right">
              <img src={dane} alt="hunter" />
              <span>Tyson</span>
            </div>
            <img src={more} alt="more" />
          </div>
          <div className="middle">
            <img src={dane} alt="hunter" />
          </div>
          <div className="bottom">
            <div className="bottom_left">
              <img src={like_2} alt="like" />
              <img src={message_2} alt="like" />
              <img src={share} alt="like" />
            </div>
            <img src={save} alt="save" />
          </div>
          <div className="user">
            <span className="likes">
              <b>90 Likes</b>
            </span>
            <span className="caption">
              <span>
                <b>Tyson</b>
                &nbsp;Eyes on the Ball!!
              </span>
            </span>
          </div>
        </div>
        {/* 4 */}
        <div className="post">
          <div className="top">
            <div className="top_right">
              <img src={dane_2} alt="hunter" />
              <span>Spike</span>
            </div>
            <img src={more} alt="more" />
          </div>
          <div className="middle">
            <img src={dane_3} alt="hunter" />
          </div>
          <div className="bottom">
            <div className="bottom_left">
              <img src={like_2} alt="like" />
              <img src={message_2} alt="like" />
              <img src={share} alt="like" />
            </div>
            <img src={save} alt="save" />
          </div>
          <div className="user">
            <span className="likes">
              <b>90 Likes</b>
            </span>
            <span className="caption">
              <span>
                <b>Spike</b>
                &nbsp;Just Chilling!!
              </span>
            </span>
          </div>
        </div>
        {/* 5 */}
        <div className="post">
          <div className="top">
            <div className="top_right">
              <img src={coon} alt="hunter" />
              <span>Charles</span>
            </div>
            <img src={more} alt="more" />
          </div>
          <div className="middle">
            <img src={coon_1} alt="hunter" />
          </div>
          <div className="bottom">
            <div className="bottom_left">
              <img src={like_2} alt="like" />
              <img src={message_2} alt="like" />
              <img src={share} alt="like" />
            </div>
            <img src={save} alt="save" />
          </div>
          <div className="user">
            <span className="likes">
              <b>1k Likes</b>
            </span>
            <span className="caption">
              <span>
                <b>Charles</b>
                &nbsp;Liiking like a king as usual!!
              </span>
            </span>
          </div>
        </div>
        {/* 6 */}
        <div className="post">
          <div className="top">
            <div className="top_right">
              <img src={dog_1} alt="hunter" />
              <span>Jimmy</span>
            </div>
            <img src={more} alt="more" />
          </div>
          <div className="middle">
            <img src={retr} alt="hunter" />
          </div>
          <div className="bottom">
            <div className="bottom_left">
              <img src={like_2} alt="like" />
              <img src={message_2} alt="like" />
              <img src={share} alt="like" />
            </div>
            <img src={save} alt="save" />
          </div>
          <div className="user">
            <span className="likes">
              <b>900 Likes</b>
            </span>
            <span className="caption">
              <span>
                <b>Jimmy</b>
                &nbsp;Walk Walk Walk
              </span>
            </span>
          </div>
        </div>
        {/* 7 */}
        <div className="post">
          <div className="top">
            <div className="top_right">
              <img src={thomas} alt="hunter" />
              <span>Thomas</span>
            </div>
            <img src={more} alt="more" />
          </div>
          <div className="middle">
            <img src={cat} alt="hunter" />
          </div>
          <div className="bottom">
            <div className="bottom_left">
              <img src={like_2} alt="like" />
              <img src={message_2} alt="like" />
              <img src={share} alt="like" />
            </div>
            <img src={save} alt="save" />
          </div>
          <div className="user">
            <span className="likes">
              <b>900 Likes</b>
            </span>
            <span className="caption">
              <span>
                <b>Thomas</b>
                &nbsp;Just a Good Kitty
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
