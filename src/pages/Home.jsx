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
  // haveData: set icon loading or not
  const haveData = useSelector(
    (state) => state.suggestedArticleReducer.haveData
  );
  useEffect(() => {
    dispatch(getCategoriesAsync());
    dispatch(actGetListSuggestedArticleAsync());
    dispatch(actFetchInfoUserAsync());
  }, []);
  return (
    <div className={`home`}>
      <div className='container'>
        {haveData ? (
          <>
            <SuggestedArticles title={"Bài viết đề xuất"} />
            <ArticlesByCategory idCategory={9} />
            <ArticlesByCategory idCategory={105} />
            <ArticlesByCategory idCategory={10} />
          </>
        ) : (
          <div className='waitingFetchData'>{iconLoading}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
