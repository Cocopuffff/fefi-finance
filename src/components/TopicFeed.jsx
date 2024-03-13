import React, { useEffect, useState, useContext, useRef } from "react";
import SummarySentiment from "./SummarySentiment";
import NewsCard from "./NewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./TopicFeed.module.css";
import AddContext from "../context/AddContext";

const TopicFeed = () => {
  const [data, setData] = useState(null);
  const addCtx = useContext(AddContext);
  const inputRef = useRef();

  const getData = async (signal) => {
    try {
      // const res = await fetch(
      //   "https://newsdata.io/api/1/news?apikey=pub_395314400f4a938c352dab00d456c0c590114&q=Nasdaq-100&language=en&category=business,top,world",
      //   { signal }
      // );
      const res = await fetch(new Request("newsdata.json"), { signal });

      if (res.ok) {
        let data = await res.json();
        data = JSON.stringify(data);
        console.log(data);
        setData(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getData(controller.signal);
    return () => controller.abort();
  }, []);

  const handleSearch = () => {
    addCtx.setSelectedTopic({
      fields: {
        searchParameter: inputRef.current.value,
        displayName: inputRef.current.value.split(" ")[0],
      },
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(inputRef.current.value);
      //some action
      handleSearch();
      inputRef.current.value = "";
    }
  };

  const handleEdit = (event) => {};

  return (
    <div className={`container-fluid px-5 ${styles.topicFeed}`}>
      {addCtx.addTopic ? <p>ADD TOPIC: TRUE</p> : <p>ADD TOPIC: FALSE</p>}
      {addCtx.selectedTopic ? (
        <p>{JSON.stringify(addCtx.selectedTopic)}</p>
      ) : (
        <p>no selectedTopic</p>
      )}
      <div className={`row d-flex justify-content-center`}>
        <div
          className={`${styles.searchBar} ${
            addCtx.addTopic ? `${styles.selected}` : ""
          }`}
        >
          <input
            type="text"
            className={`${styles.searchInput}`}
            placeholder="Search topics to follow"
            onFocus={() => addCtx.setAddTopic(true)}
            onBlur={() => addCtx.setAddTopic(false)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <button className={`${styles.searchButton}`} onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      {addCtx.selectedTopic && (
        <div className={styles.topic}>
          <div className={styles.searchTopic}>
            <h3>{addCtx.selectedTopic.fields.displayName}</h3>
          </div>
          <div className={styles.searchParameter}>
            <h3>{addCtx.selectedTopic.fields.searchParameter}</h3>
          </div>
          <button className={styles.edit} onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      )}

      <div className="row">
        <SummarySentiment data={data} />
      </div>
      <div className="row">
        {data &&
          !addCtx.addTopic &&
          JSON.parse(data).results.map((result, idx) => {
            return (
              <NewsCard
                key={idx}
                image_url={result.image_url}
                source={result.source_url}
                title={result.title}
                description={result.description}
                link={result.link}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TopicFeed;
