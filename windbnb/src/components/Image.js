import React from "react";
import PropTypes from "prop-types";

const Image = ({ url }) => {
  return <img alt="house" className="stayPhoto" src={url} />;
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
