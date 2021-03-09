import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchWindow from "./SearchWindow";

const SearchOption = ({ location, search }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [chosenLocation, setChosenLocation] = useState(location);
  const changeSearch = () => {
    setShowSearch(true);
  };

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
      <SearchWindow
        show={showSearch}
        chosenLocation={chosenLocation}
        changeLocation={changeLocation}
        onSearch={onSearch}
      />
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
