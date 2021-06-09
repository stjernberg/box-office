import React from "react";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        This is the home page
      </Route>
    </Switch>
  );
};

export default App;
