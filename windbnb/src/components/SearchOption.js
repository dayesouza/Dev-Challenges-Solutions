import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SearchOption = ({ location }) => {
  const [showSearch, setShowSearch] = useState(false);
  const changeSearch = () => {
    setShowSearch(true);
  };

  const classSearch = classnames({
    "d-none": !showSearch,
    "topBar__search--open": showSearch,
  });

  return (
    <>
      <div className={classSearch}>
        <div className="formInput">
          <input></input>
        </div>
      </div>
      <div className="topBar__search flex" onClick={() => changeSearch()}>
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
    </>
  );
};

SearchOption.propTypes = {
  location: PropTypes.string.isRequired,
};

export default SearchOption;
