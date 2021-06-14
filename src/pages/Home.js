import React, { useState } from "react";

import Navs from "../components/Navs";
import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  const BASE_URL = `https://api.tvmaze.com/search/${searchOption}?q=${input}`;

  const isShowsSearch = searchOption === "shows";

  const onSearch = () => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
        console.log(result);
      });
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

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid results={results} />
      ) : (
        <ActorGrid results={results} />
      );
    }
    return null;
  };

  return (
    <>
      <Navs />
      <div>
        {/* <input type="text" onChange={onInputChange} /> */}
        <input
          type="text"
          value={input}
          placeholder="Search with a key word"
          onChange={(ev) => setInput(ev.target.value)}
          onKeyDown={onKeyDown}
        />

        <div>
          <label htmlFor="shows-search">
            Shows
            <input
              id="shows-search"
              type="radio"
              value="shows"
              checked={isShowsSearch}
              onChange={onRadioChange}
              // onChange={(ev) => setSearchOption(ev.target.value)}
            />
          </label>

          <label htmlFor="actors-search">
            Actors
            <input
              id="actors-search"
              type="radio"
              value="people"
              checked={!isShowsSearch}
              onChange={(ev) => setSearchOption(ev.target.value)}
            />
          </label>
        </div>

        <button type="submit" onClick={onSearch}>
          Search
        </button>
        {renderResults()}
      </div>
    </>
  );
};

export default Home;
