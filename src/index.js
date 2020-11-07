import React from "react";
import ReactDOM from "react-dom";
import Issues from "./pages/Issues";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IssueDetails from "./pages/IssueDetails";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="container mt-4">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Issues} />
        <Route path="/details/:id" component={IssueDetails} />
      </Switch>
    </BrowserRouter>
  </div>,
  rootElement
);
