import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiginPage from "./routes/siginPage";
import HomePage from "./routes/homePage";
import NotFoundPage from "./routes/page404";
import MapPage from "./routes/mapPage";
import ImgUpload from "./routes/imageUpload";
import TopLastReports from "./routes/topLastReports";
import StatisticalReports from "./routes/statisticalReports";
import StatisticalReportsMunicipalties from "./routes/statisticalReportsMunicipalties";
import PrivateRoute from "./routes/privateRouter/privateRouter";
import SignupPage from "./routes/signupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SiginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route
          exact
          path="/statisticalReports"
          element={
            <PrivateRoute>
              <StatisticalReports />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/homepage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/switchboards"
          element={
            <PrivateRoute>
              <TopLastReports dataType="switchboards" />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/municipalities"
          element={
            <PrivateRoute>
              <TopLastReports dataType="municipalities" />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/imgUpload"
          element={
            <PrivateRoute>
              <ImgUpload />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/mappage"
          element={
            <PrivateRoute>
              <MapPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          element={
            <PrivateRoute>
              <StatisticalReportsMunicipalties />
            </PrivateRoute>
          }
          path="/StatisticalReportsMunicipalties"
        />
        {/* 404 rounte */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
