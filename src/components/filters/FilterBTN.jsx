import React from "react";

const FilterBTN = ({ name, index }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-dark" for={`${name}-${index}`}>
          Single toggle
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
