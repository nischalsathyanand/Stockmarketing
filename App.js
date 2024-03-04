import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import { Provider, inject, observer } from "mobx-react";
import buyStore from "./store/BuyStore";
function App() {
  return (
    <Provider buyStore={buyStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" Component={LoginForm}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/signout" Component={LoginForm} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
