import React, { useState, useEffect } from "react";
import SideList from "./SideList";

const WatchList = (props) => {
  const [instruments, setInstruments] = useState([]);

  const getInstruments = async (signal) => {
    const res = await fetch(import.meta.env.VITE_AIRTABLE_WATCHLIST, {
      signal,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_APIKEY}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      setInstruments(data);
      if (!props.selectedInstrument) {
        props.setSelectedInstrument(data.records[0]);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getInstruments(controller.signal);
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (props.newInstrument) {
      const temp = structuredClone(instruments);
      temp.records.push(props.newInstrument);
      setInstruments(temp);
    }
  }, [props.newInstrument]);

  const deleteInstrument = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_AIRTABLE_WATCHLIST}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_APIKEY}`,
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        const filteredInstruments = instruments.records.filter(
          (record) => record.id !== id
        );
        setInstruments({ records: filteredInstruments });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = (id) => {
    deleteInstrument(id);
  };

  const handleAdd = (event) => {
    props.setAddInstrument(true);
  };

  const handleSelect = (id) => {
    const selectedInstrument = instruments.records.filter(
      (record) => record.id === id
    )[0];
    props.setSelectedInstrument(selectedInstrument);
  };

  return (
    <>
      {JSON.stringify.instruments}
      <SideList
        records={instruments}
        title="Watchlist"
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        handleSelectItem={handleSelect}
        addItem={props.addInstrument}
        selectedItem={props.selectedInstrument}
      />
    </>
  );
};

export default WatchList;
