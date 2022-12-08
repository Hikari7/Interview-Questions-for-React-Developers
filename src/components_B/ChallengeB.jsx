import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ChallengeAContext from "../components_A/ChallengeA_Context";

function ChallengeB() {
  const status = useContext(ChallengeAContext);

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
    <>
      <h2 className="yellow">Challenge B</h2>
      <ul>
        {/* <p className="pink">{status.stringA}</p>
        <p className="blue">{status.stringB}</p> */}
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
    </>
  );
}

export default ChallengeB;
