import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import Title from "./components/Title";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Title />
      <List />
      <Footer />
    </div>
  );
}

export default App;
