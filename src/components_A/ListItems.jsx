import React from "react";

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
