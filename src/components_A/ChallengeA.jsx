import React, { useState } from "react";
import ListItems from "./ListItems";

function ChallengeA() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    value;
    setValue("");
    setList([...list, value]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Type something here</label>
        <br />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul style={{ textAlign: "left" }}>
        {list.map((item, index) => (
          <ListItems item={item} index={index} setList={setList} list={list} />
        ))}
      </ul>
    </>
  );
}

export default ChallengeA;
