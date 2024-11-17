import React, { useState, useEffect } from "react";
import "./App.css";
import { CardList } from "./components/card-list";
import { SearchField } from "./components/search-field";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);

  const searchingRobots = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Робот хайх</h1>
      <SearchField filterRobots={searchingRobots} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
