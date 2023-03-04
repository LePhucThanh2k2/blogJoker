import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../api";
import { mappingDataArticles } from "../../helper";
import { ThemeContext } from "../../hooks/ToggleContext";
import Articles from "../Articles";
import "./style.scss";
const ArticlesByCategory = ({ loadMore = false, idCategory }) => {
  const contentTheme = useContext(ThemeContext);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const [data, setData] = useState([]);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/wp/v2/posts?lang=vi", {
          params: {
            per_page: 2,
            page: page,
            categories: idCategory,
          },
        });
        const newData = res.data.map(mappingDataArticles);
        setTotalPage(parseInt(res.headers["x-wp-totalpages"]));
        if (page === 1) {
          setData(newData);
        } else {
          setData([...data, ...newData]);
          setShowLoadingIcon(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);
  if (data.length === 0) {
    return;
  } else {
    return (
      <div className="articlesByCategory">
        <div className="articlesByCategory__container">
          <div className={`articlesByCategory-title ${contentTheme.theme}`}>
            {categories[idCategory]}
          </div>
          <div className="articlesByCategory-box">
            {data.map((item) => (
              <Articles
                haveImage={true}
                haveStyle={false}
                data={item}
                key={item.id}
              />
            ))}
          </div>
          {totalPage > page && (
            <>
              {true && (
                <div
                  className="button"
                  onClick={() => {
                    setShowLoadingIcon(true);
                    setPage(page + 1);
                  }}
                >
                  {showLoadingIcon ? (
                    <>
                      <svg
                        width="50px"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                      >
                        <circle
                          cx={50}
                          cy={50}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={10}
                          r={35}
                          strokeDasharray="164.93361431346415 56.97787143782138"
                          transform="rotate(120.057 50 50)"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            repeatCount="indefinite"
                            dur="1s"
                            values="0 50 50;360 50 50"
                            keyTimes="0;1"
                          />
                        </circle>
                      </svg>
                    </>
                  ) : (
                    "Loading"
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
};

export default ArticlesByCategory;
