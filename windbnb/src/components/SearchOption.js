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
    search(chosenLocation);
  };

  const changeLocation = (loc) => {
    setChosenLocation(loc);
  };

  const LocationName = () => {
    return (
      <span>
        {chosenLocation.city.length > 0
          ? chosenLocation.city + ", "
          : "Finland"}
        {chosenLocation.country}
      </span>
    );
  };

  return (
    <>
      <div className={classSearch}>
        <div className="flex">
          <div className="formInput">
            <label>Location</label>
            <LocationName />
          </div>

          <div className="topBar__border">
            <button className="topBar__button" onClick={() => onSearch()}>
              <i className="material-icons">search</i>
              Search
            </button>
          </div>
        </div>

        <LocationList
          location={chosenLocation}
          setLocation={changeLocation}
          list={locationOptions}
        />
      </div>
      <div className="topBar__search flex" onClick={() => changeSearch()}>
        <div>
          <LocationName />
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
