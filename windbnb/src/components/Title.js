import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, count }) => {
  return (
    <div className="flex space-between">
      <span className="title">{title}</span>
      <span className="subtitle">{count} stays</span>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Title;
