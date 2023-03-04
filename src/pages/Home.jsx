import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import ArticlesByCategory from "../components/ArticlesByCategory";
import FreeStyles from "../components/Freestyles";
import SuggestedArticles from "../components/SuggestedArticles";
import { actFetchInfoUserAsync } from "../redux/auth/action";
import { getCategoriesAsync } from "../redux/categories/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAsync());
    dispatch(actFetchInfoUserAsync());
  }, []);
  return (
    <div className={`home`}>
      <div className="container">
        <SuggestedArticles title={"Bài viết đề xuất"} />
        <ArticlesByCategory idCategory={9} />
        <ArticlesByCategory idCategory={105} />
        <ArticlesByCategory idCategory={10} />
        <FreeStyles />
      </div>
    </div>
  );
};

export default Home;
