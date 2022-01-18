import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setGender, setPageNumber, setStatus, setSpecies }) => {
  let clear = () => {
    setGender("");
    setPageNumber(1);
    setStatus("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
