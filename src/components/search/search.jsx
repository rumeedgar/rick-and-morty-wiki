import React from "react";
import styles from "./Search.module.scss";

const search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="search for character"
        type="text"
        className={styles.input}
      />
      <button className={`${styles.btn} btn btn-dark fs-5`}>Search</button>
    </form>
  );
};

export default search;
