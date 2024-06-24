import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
