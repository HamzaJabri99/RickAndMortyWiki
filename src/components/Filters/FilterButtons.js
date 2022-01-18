import React from "react";

function FilterButtons({ name, item, index, queue, setPageNumber }) {
  return (
    <div>
      <style>
        {`
        .active:checked+label{
            background-color:#0b5ed7;
            color:white;
        }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check  ">
        <input
          onClick={() => {
            setPageNumber(1);
            queue(item);

            console.log(item);
          }}
          className="form-check-input active"
          type="radio"
          name={`${name}`}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
}

export default FilterButtons;
