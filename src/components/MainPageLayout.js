import React from "react";
import Navs from "./Navs";
// import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <>
      <div>
        <h1>Box Office</h1>
        <p>Look for movies and actors</p>
      </div>
      <Navs />

      {children}
    </>
  );
};

export default MainPageLayout;
