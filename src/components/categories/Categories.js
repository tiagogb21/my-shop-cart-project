import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategories } from "../../api/apiUtils";
import ShowProducts from "../showProducts/ShowProducts";

const addCategoryAction = (categoryId) => {
  return {
    type: "ADD_CATEGORY",
    categoryId,
  };
};

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const dispatchCategory = useDispatch();

  useEffect(() => {
    const getCategoriesInfo = async () => {
      const request = await getCategories();
      setCategories(request);
    };
    getCategoriesInfo();
  }, []);

  return (
    <>
      <select
        onClick={({ target }) =>
          dispatchCategory(addCategoryAction(target[target.selectedIndex].id))
        }
      >
        {categories.length > 0 &&
          categories.map((item) => (
            <option key={item.id} id={item.id}>
              {item.name}
            </option>
          ))}
      </select>
      <ShowProducts />
    </>
  );
}
