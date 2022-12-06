import React from "react";
import { v4 as uuidv4 } from "uuid";

const ListItems = ({ item, list, setList }) => {
  const pink = "#e65e92";

  const deleteFunction = (index) => {
    console.log(index);
    const newList = [...list];

    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <>
      <li key={uuidv4()}>
        {item}
        <button
          style={{ color: pink, cursor: "pointer" }}
          onClick={() => deleteFunction(uuidv4())}
        >
          delete
        </button>
      </li>
    </>
  );
};

export default ListItems;
