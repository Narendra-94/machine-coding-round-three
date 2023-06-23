import React, { useState } from "react";
import "./snacks.css";
import { columns } from "../utils/utils";

export const SnacksTable = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
  };

  return (
    <table>
      <thead>
        <tr className="snacks-table-header">
          {columns.map(({ key, title }) => (
            <th key={key} onClick={() => handleSort(key)}>
              {title}
              {sortConfig.key === key &&
                (sortConfig.direction === "asc" ? " ▲" : " ▼")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(
          ({
            id,
            product_name,
            product_weight,
            price,
            calories,
            ingredients,
          }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{product_name}</td>
              <td>{product_weight}</td>
              <td>{price}</td>
              <td>{calories}</td>
              <td>
                {ingredients.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index !== ingredients.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
