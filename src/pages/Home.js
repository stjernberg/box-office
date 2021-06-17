import React, { useState, useEffect } from "react";

import Navs from "../components/Navs";
import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";

const Home = () => {
  const [query, setQuery] = useState("women");
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [category, setCategory] = useState("shows");
  const URL = `https://api.tvmaze.com/search/${category}?q=${query}`;

  const isShowsSearch = category === "shows";

  useEffect(() => {
    const onSearch = () => {
      fetch(URL)
        .then((response) => response.json())
        .then((result) => {
          setResults(result);
          console.log(result);
        });
    };

    onSearch();
  }, [URL]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };
  // const onInputChange = (ev) => {
  //   setInput(ev.target.value);
  // };

  // const onRadioChange = (ev) => {
  //   setCategory(ev.target.value);
  // };

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
        <form onSubmit={getSearch}>
          <input
            type="text"
            value={input}
            placeholder="Search with a key word"
            onChange={(ev) => setInput(ev.target.value)}
            // onKeyDown={onKeyDown}
          />

          <div>
            <label htmlFor="shows-category">
              Shows
              <input
                id="shows-category"
                type="radio"
                value="shows"
                checked={isShowsSearch}
                // onChange={onRadioChange}
                onChange={(ev) => setCategory(ev.target.value)}
              />
            </label>

            <label htmlFor="actors-category">
              Actors
              <input
                id="actors-category"
                type="radio"
                value="people"
                checked={!isShowsSearch}
                onChange={(ev) => setCategory(ev.target.value)}
              />
            </label>
          </div>

          <button type="submit">Search</button>
        </form>
        {renderResults()}
      </div>
    </>
  );
};

export default Home;
