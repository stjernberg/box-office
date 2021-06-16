import React from "react";

import ActorCard from "./ActorCard";
import { CardsWrapper } from "../style";

const ActorGrid = ({ results }) => {
  return (
    <CardsWrapper>
      {results.map(({ person }) => (
        <ActorCard key={person.id} {...person} />
      ))}
    </CardsWrapper>
  );
};

export default ActorGrid;
