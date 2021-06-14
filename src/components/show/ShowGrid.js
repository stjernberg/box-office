import React from "react";

import ShowCard from "./ShowCard";

const ShowGrid = ({ results }) => {
  return (
    <>
      {results.map(({ show }) => (
        <ShowCard key={show.id} {...show} />
      ))}
    </>
  );
};

export default ShowGrid;
