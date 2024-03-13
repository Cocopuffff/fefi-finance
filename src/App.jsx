import { useState } from "react";
import Navbar from "./components/Navbar";
import Topic from "./components/ListItem";
import TopicFeed from "./components/TopicFeed";
import DisplayNews from "./components/DisplayNews";
import DisplayInstruments from "./components/DisplayInstruments";
import DisplayCandles from "./components/DisplayCandles";
import TopicFeedAV from "./components/TopicFeedAV";
import TopicList from "./components/TopicList";
import "./App.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <DisplayNews />
      {/* <TopicFeed /> */}
      {/* <DisplayCandles
        instrument="BTC_USD"
        granularity="D"
        count="6"
        from=""
        to=""
      />
      <DisplayInstruments /> */}
      {/* <TopicFeedAV /> */}
    </div>
  );
}

export default App;
