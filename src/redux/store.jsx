import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "./categories/reducer";
import listArticle from "./posts/reducer";
const rootReducer = combineReducers({
  categoriesReducer,
  listArticle,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
