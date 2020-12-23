import React from 'react';
import PropTypes from 'prop-types';

const StayTitle = ({text}) => {
  return (
    <span className="stayTitle">
      {text}
    </span>
  );
};

StayTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default StayTitle;