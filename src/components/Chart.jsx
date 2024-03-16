import React, { useEffect, useState } from "react";
import styles from "./Chart.module.css";

const Chart = (props) => {
  const [data, setData] = useState(null);
  const getData = async (signal) => {
    try {
      if (!props.instrument) {
        throw new Error("must have instrument parameter");
      }
      let url =
        import.meta.env.VITE_FXPRACTICE_OANDA +
        "/v3/instruments/" +
        props.instrument +
        "/candles";

      if (props.granularity || props.count || props.from || props.to) {
        url = url.concat("?");
      }

      props.granularity
        ? (url = url.concat(`&granularity=${props.granularity}`))
        : "";
      props.count ? (url = url.concat(`&count=${props.count}`)) : "";
      props.from ? (url = url.concat(`&from=${props.from}`)) : "";
      props.to ? (url = url.concat(`&to=${props.to}`)) : "";
      console.log(url);

      const res = await fetch(url, {
        signal,
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_OANDA_DEMO_API_KEY,
          Connection: "Keep-Alive",
        },
      });

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
  }, []);
  return (
    <div className={`${styles.chartContainer}`}>{JSON.stringify(data)}</div>
  );
};

export default Chart;
