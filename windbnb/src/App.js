import React, { useEffect, useState } from "react";
import "./App.scss";
import TopBar from "./components/TopBar";
import Title from "./components/Title";
import List from "./components/List";
import Footer from "./components/Footer";

let stays = require("./api/stays.json");
function App() {
  const [list, setList] = useState(stays);
  const [cityFiltered, setCityFiltered] = useState("Finland");

  const search = (filter) => {
    if (!filter.city.length) {
      setList(stays);
      return;
    }
    const filtered = stays.filter(
      (l) => l.city === filter.city && l.country === filter.country
    );
    setList(filtered);
    setCityFiltered(`${filter.city}, ${filter.country}`);
  };

  return (
    <>
      <TopBar search={search} />
      <div className="app">
        <Title title={`Stays in ${cityFiltered}`} count={list.length} />
        <List list={list} />
        <Footer />
      </div>
    </>
  );
}

export default App;
