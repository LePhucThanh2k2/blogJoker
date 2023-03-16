import {
  ACT_GET_LIST_ARTICLE_BY_CATEGORY,
  ACT_GET_LIST_SUGGESTED_ARTICLE,
} from "./action";

const initState = {
  // haveData : set action waiting for fetch data
  haveData: false,
  suggestedArticle: [],
  articlesByCategory: {
    totalPage: null,
  },
};

function listArticle(state = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_SUGGESTED_ARTICLE:
      return {
        ...state,
        suggestedArticle: [...action.payload.data],
        haveData: true,
      };
    case ACT_GET_LIST_ARTICLE_BY_CATEGORY:
      const isExits = state.articlesByCategory[action.payload.idCategory]
        ? false
        : true;

      return {
        ...state,
        articlesByCategory: {
          ...state.articlesByCategory,
          [action.payload.idCategory]: isExits
            ? action.payload.data
            : [
                ...state.articlesByCategory[action.payload.idCategory],
                ...action.payload.data,
              ],
          totalPage: action.payload.totalPage,
        },
      };

    default:
      return state;
  }
}
export default listArticle;
