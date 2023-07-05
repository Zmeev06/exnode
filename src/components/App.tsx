import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import Layout from "./Layout";

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
