import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api";
import { mappingDataArticles } from "../../helper";
import { ThemeContext } from "../../hooks/ToggleContext";
import { actGetListArticleByCategoryAsync } from "../../redux/posts/action";
import iconLoading from "../../share/iconLoading";
import Articles from "../Articles";
import "./style.scss";
const ArticlesByCategory = ({ loadMore = false, idCategory, nameCategory }) => {
  const dispatch = useDispatch();
  const contentTheme = useContext(ThemeContext);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(actGetListArticleByCategoryAsync(page, idCategory));
  }, []);

  const data =
    useSelector((state) => state.listArticle.articlesByCategory) || [];
  const totalPage = data.totalPage;
  console.log(data);
  function handleLoading() {
    setShowLoadingIcon(true);
    setPage(page + 1);
  }

  if (data[idCategory]?.length === 0) {
    return;
  } else {
    return (
      <div className='articlesByCategory'>
        <div className='articlesByCategory__container'>
          <div className={`articlesByCategory-title ${contentTheme.theme}`}>
            {nameCategory}
          </div>
          <div className='articlesByCategory-box'>
            {data[idCategory]?.map((item) => (
              <Articles
                haveImage={true}
                haveStyle={false}
                data={item}
                key={item.id}
              />
            ))}
          </div>
          {true && (
            <>
              {
                <div
                  className='button'
                  onClick={() => {
                    setShowLoadingIcon(true);
                    setPage(page + 1);
                  }}>
                  {showLoadingIcon ? iconLoading : "Loading"}
                </div>
              }
            </>
          )}
        </div>
      </div>
    );
  }
};

export default ArticlesByCategory;
