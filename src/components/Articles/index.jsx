import React, { useContext } from "react";
import "./style.scss";
import img from "../../imgs/a.jpg";
import { ThemeContext } from "../../hooks/ToggleContext";
import { useSelector } from "react-redux";
import { formatDate } from "../../helper";
const Articles = ({ haveImage = false, haveStyle = true, data }) => {
  const contentTheme = useContext(ThemeContext);
  const categories = useSelector((state) => state.categoriesReducer.categories);

  const classStyle = haveStyle ? "style" : "";

  return (
    <div className={`articles ${contentTheme.theme} `}>
      <div className="articles__container" id={`${classStyle}`}>
        {haveImage && (
          <div className="articles-image">
            <img src={data.url} alt="Joker" />
          </div>
        )}
        <div className="articles-content">
          {haveImage && (
            <span className="articles-category">
              {categories[data.category[0]]}
            </span>
          )}
          <h2 className="articles-title">{data.title}</h2>
          {haveImage && (
            <div
              className="articles-desc"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
          )}
          <div className="articles-auth">
            <div className="articles-auth__avatar">
              <img src={data.author.avatar} alt="" />
            </div>
            <div className="articles-auth__info">
              <p className="articles-auth__name">{data.author.nickname}</p>
              <div className="articles-auth__date">
                <span className="articles-auth__day">
                  {formatDate(data.date).dateFormatted}
                </span>
                <span className="articles-auth__time">
                  <i className="fa-regular fa-clock"></i>
                  {formatDate(data.date).dateRelative}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
