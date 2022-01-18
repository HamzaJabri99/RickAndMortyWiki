import React from "react";
import Styles from "./search.module.scss";
function Search({ setSearch, setPageNumber }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="d-flex justify-content-center gap-5 my-4"
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          setPageNumber(1);
        }}
        placeholder="Search for characters"
        className={`${Styles.input}`}
        type="text"
      />
      <button className={`${Styles.btn} btn btn-primary fs-5`} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
