import React, { useState, useEffect, useContext } from "react";
import SideList from "./SideList";
import AddContext from "../context/AddContext";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const AddCtx = useContext(AddContext);

  const getTopics = async (signal) => {
    const res = await fetch(import.meta.env.VITE_AIRTABLE_TOPICS, {
      signal,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_APIKEY}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      setTopics(data);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getTopics(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const handleDelete = (id) => {
    console.log(id);
  };

  const handleAdd = (event) => {
    console.log("add");
    AddCtx.setAddTopic(true);
  };

  const handleSelect = (id) => {
    const selectedTopic = topics.records.filter(
      (record) => record.id === id
    )[0];
    console.log(selectedTopic);
    AddCtx.setSelectedTopic(selectedTopic);
  };

  return (
    <SideList
      records={topics}
      title="Topics"
      handleDelete={handleDelete}
      handleAdd={handleAdd}
      handleSelectItem={handleSelect}
    />
  );
};

export default TopicList;
