import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "./categories/reducer";
const rootReducer = combineReducers({
  categoriesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
