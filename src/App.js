import React from "react";
import { Switch, Route } from "react-router-dom";
// import styled from "styled-components/macro";

import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

const App = () => {
  return (
    <>
      <Switch>
        {/* <PageWrapper> */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/starred">
          <Starred />
        </Route>
        <Route path="/show/:id">
          <Show />
        </Route>
        {/* </PageWrapper> */}
      </Switch>
    </>
  );
};

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   width: 100%;
//   background-color: #dce7f3;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// overflow-y: hidden;
//`; */

export default App;
