import React from "react";
import { Switch, Route } from "react-router-dom";

import Navs from "./components/Navs";
const App = () => {
  return (
    <>
      <Navs />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/starred">This is starred</Route>
      </Switch>
    </>
  );
};

export default App;
