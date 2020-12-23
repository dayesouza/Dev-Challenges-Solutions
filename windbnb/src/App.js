import React, { useState } from "react";
import "./App.scss";
import TopBar from "./components/TopBar";
import Title from "./components/Title";
import List from "./components/List";
import Footer from "./components/Footer";

let stays = require('./api/stays.json');
function App() {
  const [list, setList] = useState(stays);
  return (
    <div className="App">
      <TopBar />
      <Title title="Stays in Finland" count={list.length}/>
      <List list={list}/>
      <Footer />
    </div>
  );
}

export default App;
