import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./product/redux/store/index";
import Products from "./components/listProducts/Products";
import Categories from "./components/categories/Categories";

function App() {
  return (
    <Provider store={store}>
      <Products />
      <Categories />
    </Provider>
  );
}

export default App;
