import React, { useState } from "react";

function Header({ header, sortHandler }) {
  const [order, setOrder] = useState("down");
  const handleOrder = () => {
    sortHandler(order, header.name);
    if (order === "down") {
      setOrder("up");
      return;
    }
    setOrder("down");
    return;
  };

  return (
    <th key={header.name} className="header">
      {header.name}
      <i
        className={`fa fa-caret-${order}`}
        id={`header${header.name}`}
        onClick={() => handleOrder()}
      ></i>
    </th>
  );
}

export default Header;
