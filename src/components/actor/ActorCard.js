import React from "react";

import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { StyledActorCard } from "./ActorCard.styled";

const ActorCard = ({ name, gender, country, birthday, deathday, image }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image ? image.medium : IMAGE_NOT_FOUND} alt={name} />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country known"}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : "Alive"}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
