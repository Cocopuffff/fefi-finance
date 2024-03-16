import React, { useState } from "react";
import Chart from "../components/Chart";
import WatchList from "../components/WatchList";
import AddInstrumentsModal from "../components/AddInstrumentsModal";

const DisplayChart = (props) => {
  const [addInstrument, setAddInstrument] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState("");
  const [newInstrument, setNewInstrument] = useState("");

  const passInstrument = (instrument) => {
    setNewInstrument(instrument);
  };

  const cancelAddInstrument = () => {
    setAddInstrument(!addInstrument);
  };

  return (
    <div className="displayView">
      {addInstrument && (
        <AddInstrumentsModal
          title="Add instruments to your watchlist"
          handleAddInstrument={passInstrument}
          handleOkay={cancelAddInstrument}
        />
      )}
      <Chart
        count="200"
        from=""
        to=""
        granularity={props.selectedTimeFrame}
        addInstrument={addInstrument}
        setAddInstrument={setAddInstrument}
        selectedInstrument={selectedInstrument}
        setSelectedInstrument={setSelectedInstrument}
      />
      <WatchList
        addInstrument={addInstrument}
        setAddInstrument={setAddInstrument}
        selectedInstrument={selectedInstrument}
        setSelectedInstrument={setSelectedInstrument}
        newInstrument={newInstrument}
      />
    </div>
  );
};

export default DisplayChart;
