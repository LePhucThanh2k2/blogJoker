import { api } from "../../api";
import { mappingDataArticles } from "../../helper";

export const ACT_GET_LIST_SUGGESTED_ARTICLE = "ACT_GET_LIST_SUGGESTED_ARTICLE";
export const ACT_GET_LIST_ARTICLE_BY_CATEGORY =
  "ACT_GET_LIST_ARTICLE_BY_CATEGORY";

export function actGetListSuggestedArticle(data) {
  return { type: ACT_GET_LIST_SUGGESTED_ARTICLE, payload: { data } };
}

export function actGetListArticleByCategory(idCategory, totalPage, data) {
  return {
    type: ACT_GET_LIST_ARTICLE_BY_CATEGORY,
    payload: { idCategory, totalPage, data },
  };
}

export function actGetListSuggestedArticleAsync() {
  return async (dispatch) => {
    try {
      const res = await api.get("/wp/v2/posts?lang=vi", {
        params: {
          per_page: 7,
          page: 1,
        },
      });
      const data = res.data.map(mappingDataArticles);
      dispatch(actGetListSuggestedArticle(data));
      return { ok: true };
    } catch (error) {
      console.log(error);
      return { ok: false };
    }
  };
}

export function actGetListArticleByCategoryAsync(page, idCategory) {
  return async (dispatch) => {
    try {
      const res = await api.get("/wp/v2/posts?lang=vi", {
        params: {
          per_page: 2,
          page: page,
          categories: idCategory,
        },
      });
      const data = res.data.map(mappingDataArticles);
      const totalPage = parseInt(res.headers["x-wp-totalpages"]);
      dispatch(actGetListArticleByCategory(idCategory, totalPage, data));
      return { ok: true };
    } catch (error) {
      console.log(error);
      return { ok: false };
    }
  };
}
