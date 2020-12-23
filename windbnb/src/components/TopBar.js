import React from "react";
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import SearchOption from "./SearchOption";

const TopBar = () => {
  return (
    <div className="topBar flex space-between">
      <div>

      <Logo />
      </div>
      <SearchOption location="Helsinki, Finland" />
    </div>
  );
};

export default TopBar;
