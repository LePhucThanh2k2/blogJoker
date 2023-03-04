const initSate = {
  categories: {},
};
function categoriesReducer(state = initSate, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: { ...action.payload.data },
      };
    default:
      return state;
  }
}
export default categoriesReducer;
