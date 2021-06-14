import React from "react";

import ActorCard from "./ActorCard";

const ActorGrid = ({ results }) => {
  return (
    <>
      {results.map(({ person }) => (
        <ActorCard key={person.id} {...person} />
      ))}
    </>
  );
};

export default ActorGrid;
