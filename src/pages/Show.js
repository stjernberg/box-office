import React, { useEffect, useReducer } from "react";

import { useParams } from "react-router-dom";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, show: action.show, error: null };
    }

    case "FETCH_FAILED": {
      return { isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};
const Show = () => {
  const { id } = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          dispatch({ type: "FETCH_SUCCESS", show: data });
        }, 2000);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_SUCCESS", error: err.message });
      });
  }, [id]);

  console.log("show", state.show);
  console.log("state", state);

  return (
    <>
      {state.error && <div>{state.error}</div>}
      {state.isLoading && <div>Loading...</div>}
      <div>Show Page</div>
    </>
  );
};

export default Show;
