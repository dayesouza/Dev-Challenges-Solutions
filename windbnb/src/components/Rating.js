import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from "react-icons/ai";
const Rating = ({value}) => {
  return (
    <span className="rating"><AiFillStar />{value}</span>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired
};

export default Rating;