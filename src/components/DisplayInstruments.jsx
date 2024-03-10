import React, { useEffect, useState } from "react";

const DisplayInstruments = () => {
  const [data, setData] = useState(null);
  const getData = async (signal) => {
    try {
      const url =
        import.meta.env.VITE_FXPRACTICE_OANDA +
        "/v3/accounts/" +
        import.meta.env.VITE_OANDA_ACCOUNT +
        "/instruments";

      const res = await fetch(url, {
        signal,
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_OANDA_DEMO_API_KEY,
        },
      });
      // const res = await fetch(new Request("instruments.json"), { signal });

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
        data.instruments.map((result, idx) => {
          return (
            <div key={idx} className="row">
              {/* <div className="col">{result.name}</div>
              <div className="col">{result.type}</div> */}
              <div className="col">{result.displayName}</div>
            </div>
          );
        })}
      <div>Raw:</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default DisplayInstruments;
