import { api } from "../../api";
export function getCategories(data) {
  return {
    type: "GET_CATEGORIES",
    payload: { data },
  };
}
export function getCategoriesAsync(id) {
  return async (dispatch) => {
    try {
      const obj = {};
      const res = await api.get("/wp/v2/categories?per_page=50&page=1", {
        params: {
          include: id,
        },
      });
      res.data.map((item) => {
        obj[item.id] = item.name;
      });
      dispatch(getCategories(obj));
    } catch (error) {
      console.log(error);
    }
  };
}
