import { ACT_GET_LIST_SUGGESTED_ARTICLE } from "./action";

const initState = {
  // haveData : set action waiting for fetch data
  haveData: false,
  suggestedArticle: [],
};

function suggestedArticleReducer(state = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_SUGGESTED_ARTICLE:
      return {
        ...state,
        suggestedArticle: [...action.payload.data],
        haveData: true,
      };

    default:
      return state;
  }
}
export default suggestedArticleReducer;
