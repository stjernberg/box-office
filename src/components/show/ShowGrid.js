import React from "react";

import ShowCard from "./ShowCard";
import { CardsWrapper } from "../style";

const ShowGrid = ({ results }) => {
  return (
    <CardsWrapper>
      {results.map(({ show }) => (
        <ShowCard key={show.id} {...show} />
      ))}
    </CardsWrapper>
  );
};

export default ShowGrid;
