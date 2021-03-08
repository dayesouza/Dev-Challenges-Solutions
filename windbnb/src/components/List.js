import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import StayTitle from "./StayTitle";
import Rating from "./Rating";
import SuperHost from "./SuperHost";

const List = ({ list }) => {
  return (
    <div className="grid">
      {list.map((stay) => {
        return (
          <div className="stay">
            <Image url={stay.photo} />
            <div className="flex details space-between">
              <div className="flex">
                {stay.superHost && <SuperHost></SuperHost>}
                <span className="details__type">
                  {stay.type} {stay.beds > 0 && " . " + stay.beds + " beds"}
                </span>
              </div>
              <Rating value={stay.rating} />
            </div>
            <StayTitle text={stay.title}></StayTitle>
          </div>
        );
      })}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
