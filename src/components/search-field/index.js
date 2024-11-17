import React from "react";

import "./style.css";

export const SearchField = (props) => {
  return (
    <input
      className="search-field"
      onChange={props.filterRobots}
      type="search"
      placeholder="Роботын нэрээ оруулна уу"
    />
  );
};
