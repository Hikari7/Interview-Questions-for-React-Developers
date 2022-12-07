import React, { useState, useEffect } from "react";
import axios from "axios";

function ChallengeB() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = () => {
    axios
      .get(url)
      .then((data) => setDatas(data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(datas);

  return (
    <div>
      <ul>
        {datas.length > 0
          ? datas.map((el) => (
              <li key={el.id} style={{ listStyleType: "none" }}>
                {el.title}
              </li>
            ))
          : datas.err
          ? datas.err
          : "Loading..."}
      </ul>
    </div>
  );
}

export default ChallengeB;
