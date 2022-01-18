import React from "react";
import FilterButtons from "../FilterButtons";

function Gender({ setGender, setPageNumber }) {
  let gender = ["male", "female", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {gender.map((item, i) => (
            <FilterButtons
              queue={setGender}
              setPageNumber={setPageNumber}
              key={i}
              item={item}
              index={i}
              name={"gender"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gender;
