import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "./categories/reducer";
import suggestedArticleReducer from "./posts/reducer";
const rootReducer = combineReducers({
  categoriesReducer,
  suggestedArticleReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
