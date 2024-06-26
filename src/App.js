import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import EmailList from "./Component/Email/EmailList";
import Mail from "./Component/Email/Mail";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
