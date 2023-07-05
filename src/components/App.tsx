import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
