import React from "react";

import CircleLoader from "react-spinners/CircleLoader";

const Loader = () => {
  return (
    <div className="sweet-loading">
      <CircleLoader
        color={"green"}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
