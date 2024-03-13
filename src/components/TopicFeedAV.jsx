import React, { useEffect, useState } from "react";

const TopicFeedAV = () => {
  const [data, setData] = useState(null);
  const getData = async (signal) => {
    try {
      // const res = await fetch(
      //   "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&time_from=20240307T0000&limit=10&apikey=I910RECOXBBTSPQK&sort=RELEVANCE&tickers=FOREX:JPY",
      //   { signal }
      // );
      const res = await fetch(new Request("alphavantage.json"), { signal });

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
        data.feed.map((result, idx) => {
          if (
            result.ticker_sentiment &&
            result.ticker_sentiment.some(
              (ticker) =>
                ticker.ticker === "FOREX:JPY" &&
                parseFloat(ticker.relevance_score) > 0.15
            )
          ) {
            return (
              <div key={idx}>
                <div>Result {idx}</div>
                <div>{result.title}</div>
                <div>{result.summary}</div>
                <div>{result.url}</div>
              </div>
            );
          }
        })}
      {/* <div>Raw:</div> */}
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
};

export default TopicFeedAV;
