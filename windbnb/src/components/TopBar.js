import React from "react";
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import SearchOption from "./SearchOption";

const TopBar = ({ locationOptions, search }) => {
  return (
    <div className="topBar flex space-between">
      <div className="app">
        <Logo />
      </div>
      <SearchOption search={search} locationOptions={locationOptions} />
    </div>
  );
};

export default TopBar;
