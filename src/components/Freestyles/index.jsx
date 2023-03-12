import React from "react";
import "./style.scss";
const FreeStyles = () => {
  return (
    <div className="freestyles">
      <div className="avatar">
        <a href="https://www.facebook.com/ilovetechnologys">
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/298837490_744795830152310_3028282514526728890_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uxt6-4oJk3AAX_D-2iw&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDZNBh0jfGzKBjrszw1fr0DTB13WXHaxnXO40mp2LeFcg&oe=640EDA7E"
            alt="Skytsunami"
          />
        </a>
      </div>
      <div className="content">
        <h5>Lê Phúc Thành (Joker)</h5>
        <p>Follow me on:</p>
        <p>
          <span>
            <a href="https://www.facebook.com/ilovetechnologys" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/LePhucThanh2k2" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default FreeStyles;
