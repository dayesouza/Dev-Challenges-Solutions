import React from "react";
import PropTypes from "prop-types";

const SearchOption = ({ location }) => {
  return (
    <div className="topBar__search flex">
      <div>
        <span>{location}</span>
      </div>
      <div className="topBar__border">
        <span className="light-gray">Add guests</span>
      </div>
      <div className="topBar__border">
        <i class="material-icons primary">search</i>
      </div>
    </div>
  );
};

SearchOption.propTypes = {
  location: PropTypes.string.isRequired,
};

export default SearchOption;
