import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/loginPage";
import HomePage from "./routes/homePage";
import StatisticPage from "./routes/statisticPage";
import NotFoundPage from "./routes/page404";
import MapPage from "./routes/mapPage";
import ImgUpload from "./routes/imageUpload";
import Reports from "./routes/reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route
          exact
          path="/switchboards"
          element={<Reports dataType="switchboards" />}
        />
        <Route
          exact
          path="/municipalities"
          element={<Reports dataType="municipalities" />}
        />
        <Route exact path="/imgUpload" element={<ImgUpload />} />
        <Route exact path="/statisticPage" element={<StatisticPage />} />
        <Route exact path="/mappage" element={<MapPage />} />
        {/* 404 rounte */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
