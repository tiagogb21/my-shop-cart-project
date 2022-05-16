import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// const addProductAction = (title) => {
//   return {
//     type: "ADD_PRODUCT",
//     title,
//   };
// };

export default function Products() {
  // Quero pegar os dados que estão dentro do reducer:
  // const products = useSelector((state) => state.dataProduct);
  // Quero enviar os dados para dentro do reducer:
  // const dispatchProduct = useDispatch();

  // const addProduct = () => {
  //   dispatchProduct(addProductAction("produto3"));
  // };

  return (
    <>
      {/* <ul>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul> */}
      {/* <button type="button" onClick={() => addProduct()}>
        Novo produto
      </button> */}
    </>
  );
}
