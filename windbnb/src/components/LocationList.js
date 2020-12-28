import React from "react";
import PropTypes from "prop-types";

const LocationList = ({ list, setLocation }) => {
  return (
    <ul className="location">
      {list.map((c, index) => (
        <li key={index} onClick={() => setLocation(c)}>
          <span>
            <i className="material-icons primary">place</i>
            {c.city}, {c.country}
          </span>
        </li>
      ))}
    </ul>
  );
};

LocationList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
};

export default LocationList;
