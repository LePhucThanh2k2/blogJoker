import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { mappingDataArticles } from "../../helper";
import { ThemeContext } from "../../hooks/ToggleContext";
import iconLoading from "../../share/iconLoading";
import Articles from "../Articles";
import "./style.scss";
const SuggestedArticles = ({ title }) => {
  const contentTheme = useContext(ThemeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/wp/v2/posts?lang=vi", {
          params: {
            per_page: 7,
            page: 1,
          },
        });
        const data = res.data.map(mappingDataArticles);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (data.length === 0) {
    return <div className="waitingFetchData">{iconLoading}</div>;
  } else {
    return (
      <div className="suggestedArticles">
        <div className="suggestedArticles__container">
          <h2 className={`suggestedArticles-title ${contentTheme.theme}`}>
            {title}
          </h2>
          <div className="suggestedArticles-box">
            <div className="suggestedArticles-box__top">
              <div className="suggestedArticles-box__primary">
                <Articles haveImage={true} haveStyle={false} data={data[0]} />
              </div>
              {data.length > 4 && (
                <div className="suggestedArticles-box__secondary">
                  <Articles data={data[1]} />
                  <Articles data={data[2]} />
                  <Articles data={data[3]} />
                </div>
              )}
            </div>
            {data.length > 6 && (
              <div className="suggestedArticles-box__bottom">
                <Articles haveImage={true} haveStyle={false} data={data[4]} />
                <Articles haveImage={true} haveStyle={false} data={data[5]} />
                <Articles haveImage={true} haveStyle={false} data={data[6]} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default SuggestedArticles;
