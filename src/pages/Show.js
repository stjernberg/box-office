import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((response) => response.json())
      .then((result) => {
        setShow(result);
      });
  }, [id]);

  console.log("show", show);
  return <div>This is show page</div>;
};

export default Show;
