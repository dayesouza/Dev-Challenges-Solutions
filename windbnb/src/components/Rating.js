import React from "react";
import PropTypes from "prop-types";
const Rating = ({ value }) => {
  return (
    <span className="rating">
      <i className="material-icons primary">star</i>
      {value}
    </span>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
