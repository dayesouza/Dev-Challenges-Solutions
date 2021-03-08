import React, { useEffect, useState } from "react";
import "./App.scss";
import TopBar from "./components/TopBar";
import Title from "./components/Title";
import List from "./components/List";
import Footer from "./components/Footer";

let stays = require("./api/stays.json");
function App() {
  const [list, setList] = useState(stays);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    var distinct = [];
    stays.map((v) => {
      const value = { country: v.country, city: v.city };
      if (!distinct.find((x) => x.city === value.city)) {
        distinct.push(value);
      }
    });
    setLocations(distinct);
  }, []);

  const search = (filter) => {
    console.log(filter);
    const filtered = stays.filter(
      (l) => l.city === filter.city && l.country === filter.country
    );
    setList(filtered);
  };

  return (
    <div className="App">
      <TopBar search={search} locationOptions={locations} />
      <Title title="Stays in Finland" count={list.length} />
      <List list={list} />
      <Footer />
    </div>
  );
}

export default App;
