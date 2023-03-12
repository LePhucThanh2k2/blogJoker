import { api } from "../../api";
import { mappingDataArticles } from "../../helper";

export const ACT_GET_LIST_SUGGESTED_ARTICLE = "ACT_GET_LIST_SUGGESTED_ARTICLE ";

export function actGetListSuggestedArticle(data) {
  return { type: ACT_GET_LIST_SUGGESTED_ARTICLE, payload: { data } };
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
