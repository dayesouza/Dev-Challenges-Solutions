import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import LocationList from "./LocationList";

const SearchOption = ({ location, locationOptions, search }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [chosenLocation, setChosenLocation] = useState(location);
  const changeSearch = () => {
    setShowSearch(true);
  };

  const classSearch = classnames({
    "d-none": !showSearch,
    "topBar__search--open": showSearch,
  });

  const onSearch = () => {
    setShowSearch(false);
    search();
  };

  const changeLocation = (loc) => {
    setChosenLocation(loc);
  };

  return (
    <>
      <div className={classSearch}>
        <div className="formInput">
          <label>Location</label>
          <span>
            {chosenLocation.city}, {chosenLocation.country}
          </span>
        </div>

        <div className="topBar__border">
          <button onClick={() => onSearch()}>
            <i className="material-icons primary">search</i>
            Search
          </button>
        </div>
        <LocationList
          location={chosenLocation}
          setLocation={changeLocation}
          list={locationOptions}
        />
      </div>
      <div className="topBar__search flex" onClick={() => changeSearch()}>
        <div>
          <span>
            {chosenLocation.city}, {chosenLocation.country}
          </span>
        </div>
        <div className="topBar__border">
          <span className="light-gray">Add guests</span>
        </div>
      </div>
    </>
  );
};

SearchOption.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  search: PropTypes.func.isRequired,
};

SearchOption.defaultProps = {
  location: { city: "", country: "" },
};

export default SearchOption;
