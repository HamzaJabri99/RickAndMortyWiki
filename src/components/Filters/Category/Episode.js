import React from "react";

const Episode = ({ total, name, setId }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <select
          className="form-select"
          id={name}
          onChange={(e) => setId(e.target.value)}
        >
          <option value={"1"} selected>
            Choose...
          </option>
          {[...Array(total).keys()].map((item) => (
            <option value={item + 1}>
              {name} - {item + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Episode;
