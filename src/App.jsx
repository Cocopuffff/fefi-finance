import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
// import DisplayNews from "./pages/DisplayNews";
// import DisplayChart from "./pages/DisplayChart";
import "./App.css";

const DisplayNews = React.lazy(() => import("./pages/DisplayNews"));
const DisplayChart = React.lazy(() => import("./pages/DisplayChart"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/news" />} />
        <Route path="news" element={<DisplayNews />} />
        <Route path="chart" element={<DisplayChart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
