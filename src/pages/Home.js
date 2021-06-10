import React, { useState } from "react";
import Navs from "../components/Navs";

const Home = () => {
  const [input, setInput] = useState("");

  const onSearch = () => {
    //https://api.tvmaze.com/search/shows?q=men

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  // const onInputChange = (ev) => {
  //   setInput(ev.target.value);
  // };

  const onKeyDown = (ev) => {
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <>
      <Navs />
      <div>
        {/* <input type="text" onChange={onInputChange} /> */}
        <input
          type="text"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          onKeyDown={onKeyDown}
        />
        <button type="submit" onClick={onSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Home;
