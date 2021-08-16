import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
