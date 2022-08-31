import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImgUpload from "./routes/imageUpload";
import HomePage from "./routes/homePage";
import NotFoundPage from "./routes/page404";
import MapPage from "./routes/mapPage";
import TopLastReports from "./routes/topLastReports";
import StatisticalReports from "./routes/statisticalReports";
import StatisticalReportsMunicipalties from "./routes/statisticalReportsMunicipalties";
import PrivateRoute from "./routes/privateRouter/privateRouter";
import SignupPage from "./routes/signupPage";
import SiginPage from "./routes/siginPage";
import Switchboards from "./routes/switchboards";
import DistancePage from "./routes/distancePage";
import ImageList from "./routes/imageList";

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
          path="/imagelist"
          element={
            <PrivateRoute>
              <ImageList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/distance"
          element={
            <PrivateRoute>
              <DistancePage />
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
          path="/toplast"
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
          path="/map"
          element={
            <PrivateRoute>
              <MapPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/switchboards"
          element={
            <PrivateRoute>
              <Switchboards />
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
