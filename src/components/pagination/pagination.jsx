import React from "react";

const pagination = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((x) => x + 1);
  };

  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };
  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-dark">
        Prev
      </button>
      <button onClick={next} className="btn btn-dark">
        Next
      </button>
    </div>
  );
};

export default pagination;
