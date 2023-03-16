import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import ArticlesByCategory from "../components/ArticlesByCategory";
import FreeStyles from "../components/Freestyles";
import SuggestedArticles from "../components/SuggestedArticles";
import { actFetchInfoUserAsync } from "../redux/auth/action";
import { getCategoriesAsync } from "../redux/categories/action";
import { actGetListSuggestedArticleAsync } from "../redux/posts/action";
import iconLoading from "../share/iconLoading";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const configCategories = ["FE"];
  // haveData: set icon loading or not

  const eleArticlesByCategory = configCategories.map((item) => {
    const id = parseInt(categories[item]?.id);
    return (
      <ArticlesByCategory idCategory={id || 0} nameCategory={item} key={id} />
    );
  });
  useEffect(() => {
    dispatch(getCategoriesAsync());
    dispatch(actGetListSuggestedArticleAsync());
    // dispatch(actFetchInfoUserAsync());
  }, []);
  const haveData = useSelector((state) => state.listArticle.haveData);

  return (
    <div className={`home`}>
      <div className='container'>
        {haveData ? (
          <>
            <SuggestedArticles title={"Bài viết đề xuất"} />
            {eleArticlesByCategory}
          </>
        ) : (
          <div className='waitingFetchData'>{iconLoading}</div>
        )}

        <FreeStyles />
      </div>
    </div>
  );
};

export default Home;
