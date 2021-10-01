import React, { useState } from "react";
import Data from "../Data";
import Navbar from "./Navbar";
import PlayersData from "./PlayersData";

const PlayersList = () => {
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState(Data);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const sortName = () => {
    console.log("click");
    let newList = [...lists];
    newList.sort((a, b) => (a.name > b.name ? 1 : -1));

    setLists(newList);
  };
  const sortCountry = () => {
    console.log("click");
    let newList = [...lists];
    newList.sort((a, b) => (a.country > b.country ? 1 : -1));
    setLists(newList);
  };
  const sortStats = () => {
    console.log("click");
    let newList = [...lists];
    newList.sort((a, b) => (a.stats.runs > b.stats.runs ? -1 : 1));
    setLists(newList);
  };

  return (
    <div className="main">
      
      
         <Navbar
         handleInput={handleInput} 
         sortName={sortName}
         sortCountry={sortCountry}
         sortStats={sortStats}
          />
      
      <div className="cards">
      {lists
        .filter((list) => {
          if (search === "") {
            return list;
          } else if (list.name.toLowerCase().includes(search.toLowerCase())) {
            return list;
          }
        })
        .map((list) => {
          return <PlayersData data={list} />;
        })}
      </div>
    </div>
  );
};

export default PlayersList;
