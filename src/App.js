import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./product/redux/store/index";
import ComponentsRoutes from "./templates/routes/ComponentsRoutes";
// import Login from "./components/login/Login";

function App() {
  return (
    <Provider store={store}>
      <ComponentsRoutes />
    </Provider>
  );
}

export default App;
