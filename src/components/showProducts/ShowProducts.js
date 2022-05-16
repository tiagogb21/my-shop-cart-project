import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./ShowProducts.css";

import { getCategoriesById } from "../../api/apiUtils";

export default function ShowProducts() {
  const [categorieId] = useSelector((state) => state.dataCategory);
  const [categoriesIdInfo, setCategoriesIdInfo] = useState([]);
  useEffect(() => {
    const getCategoriesInfo = async () => {
      const request = await getCategoriesById(categorieId);
      setCategoriesIdInfo(request.results);
    };
    getCategoriesInfo();
  }, [categorieId]);
  return (
    <>
      <p>As melhores ofertas estão aqui</p>
      <section className="product_container">
        {categoriesIdInfo.length > 0 &&
          categoriesIdInfo.map((item) => (
            <section className="product_box" key={item.id}>
              <img src={item.thumbnail} alt="item description" />
              <p>
                <span>
                  R${" "}
                  {
                    item.price
                      .toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                      .split(",")[0]
                  }
                </span>
                <sup className="t">
                  .
                  {
                    item.price
                      .toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                      .split(",")[1]
                  }
                </sup>
              </p>
              <p>{item.title}</p>
              <button type="button">Adicionar ao carrinho</button>
            </section>
          ))}
      </section>
    </>
  );
}
