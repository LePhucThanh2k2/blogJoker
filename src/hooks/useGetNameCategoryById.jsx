import { useSelector } from "react-redux";

const useGetNameCategoryById = (idCategory) => {
  const categoies = useSelector((state) => state.categoriesReducer.categories);
  let element = null;
  for (const key in categoies) {
    const id = parseInt(categoies[key].id);
    if (id === idCategory) {
      return (element = categoies[key]);
    }
  }
};
export default useGetNameCategoryById;
