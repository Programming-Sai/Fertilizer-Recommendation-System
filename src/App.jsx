import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecommendationForm from "./pages/RecommendationForm";
import Results from "./pages/Results";
import { BASE_PATH } from "../BasePath";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={`${BASE_PATH}/`} element={<Home />} />
        <Route path={`${BASE_PATH}/predict`} element={<RecommendationForm />} />
        <Route path={`${BASE_PATH}/results`} element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
