import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Display from "./components/Display";
import DisplayInstruments from "./components/DisplayInstruments";
import DisplayCandles from "./components/DisplayCandles";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Display />
      <DisplayCandles
        instrument="BTC_USD"
        granularity="D"
        count="6"
        from=""
        to=""
      />
      <DisplayInstruments />
    </div>
  );
}

export default App;
