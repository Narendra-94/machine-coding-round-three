import React, { useState } from "react";
import "./snacks.css";
import { SnacksTable } from "./SnacksTable";

export const Snacks = ({ data }) => {
  const [searchSnack, setSearchSnack] = useState("");

  const searchHandler = (e) => {
    setSearchSnack(e.target.value);
  };

  const filterData = data.filter((item) =>
    item.product_name.toLowerCase().includes(searchSnack.toLowerCase())
  );

  console.log(filterData);

  return (
    <div className="snacks-container">
      <input
        placeholder="Search Here..."
        className="search-input"
        onChange={searchHandler}
      />
      <SnacksTable data={filterData} />
    </div>
  );
};
