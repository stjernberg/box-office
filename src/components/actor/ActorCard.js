import React from "react";

import IMAGE_NOT_FOUND from "../../images/not-found.png";

const ActorCard = ({ name, gender, country, birthday, deathday, image }) => {
  return (
    <div>
      <div>
        <img src={image ? image.medium : IMAGE_NOT_FOUND} alt={name} />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country known"}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
