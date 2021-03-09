import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import LocationList from "./LocationList";
import GuestFilter from "./GuestFilter";

let stays = require("../api/stays.json");
function SearchWindow({ show, chosenLocation, changeLocation, onSearch }) {
  const [locationOptions, setLocationOptions] = useState([]);
  const [showGuestsFilter, setShowGuestsFilter] = useState(false);

  const classSearch = classnames({
    "d-none": !show,
    "topBar__search--open": show,
  });

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

  useEffect(() => {
    var distinct = [];
    stays.forEach((v) => {
      const value = { country: v.country, city: v.city };
      if (!distinct.find((x) => x.city === value.city)) {
        distinct.push(value);
      }
    });
    setLocationOptions(distinct);
  }, []);

  return (
    <div className={classSearch}>
      <div className="topBar__options app">
        <div className="flex">
          <div className="formInput" onClick={() => setShowGuestsFilter(false)}>
            <label>Location</label>
            <LocationName />
          </div>

          <div className="formInput__guests">
            <label>Guests</label>
            <label
              className="formInput__label"
              onClick={() => setShowGuestsFilter(true)}
            >
              Add Guests
            </label>
          </div>

          <div className="topBar__border">
            <button className="topBar__button" onClick={() => onSearch()}>
              <i className="material-icons">search</i>
              Search
            </button>
          </div>
        </div>

        {!showGuestsFilter && (
          <LocationList
            location={chosenLocation}
            setLocation={changeLocation}
            list={locationOptions}
          />
        )}

        {showGuestsFilter && <GuestFilter />}
      </div>
    </div>
  );
}

SearchWindow.propTypes = {};

export default SearchWindow;
