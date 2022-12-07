import React from "react";
// import { v4 as uuidv4 } from "uuid";

const ListItems = ({ item, list, setList, index }) => {
  const pink = "#e65e92";

  const deleteFunction = (id) => {
    console.log(id);
    const newList = [...list];
    console.log(newList);

    newList.splice(id, 1);

    return setList(newList);
  };

  return (
    <>
      <li key={index}>
        {item}
        <button
          style={{ color: pink, cursor: "pointer" }}
          onClick={() => deleteFunction(index)}
        >
          delete
        </button>
      </li>
    </>
  );
};

export default ListItems;
