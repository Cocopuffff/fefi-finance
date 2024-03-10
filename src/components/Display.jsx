import React, { useEffect, useState } from "react";

const Display = () => {
  const [data, setData] = useState(null);
  const getData = async (signal) => {
    try {
      //   const res = await fetch(
      //     "https://newsdata.io/api/1/news?apikey=pub_395314400f4a938c352dab00d456c0c590114&q=USDJPY&language=en&category=business,top,world",
      //     { signal }
      //   );
      const res = await fetch(new Request("newsdata.json"), { signal });

      if (res.ok) {
        const data = await res.json();
        setData(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getData(controller.signal);
  });
  return (
    <div>
      <div>Processed:</div>
      {data &&
        data.results.map((result, idx) => {
          return (
            <div key={idx}>
              <div>Result {idx}</div>
              <div>{result.title}</div>
              <div>{result.description}</div>
              <div>{result.link}</div>
            </div>
          );
        })}
      {/* <div>Raw:</div>
      <div>{JSON.stringify(data)}</div> */}
    </div>
  );
};

export default Display;
