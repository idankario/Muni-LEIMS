import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/loginPage";
import HomePage from "./routes/homePage";
import StatisticPage from "./routes/statisticPage";
// import { PrivateRoute } from './components/routing';
import NotFoundPage from "./routes/page404";
import MapPage from "./routes/mapPage";
import ImgUpload from "./routes/imageUpload";
import Reports from "./routes/reports";

// import ConvertCurency from './components/convertCurency'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/cities" element={<Reports dataType="cities" />} />
        {/* <Route exact path="/" element={<LoginPage />} /> */}
        <Route exact path="/imgUpload" element={<ImgUpload />} />
        <Route
          exact
          path="/municipalities"
          element={<Reports dataType="municipalities" />}
        />
        <Route exact path="/statisticPage" element={<StatisticPage />} />
        <Route exact path="/mappage" element={<MapPage />} />
        {/* <Route
        exact
        path="/"
        element={
            <HomePage />
        }/>
     <Route path="/convertCurency" element={<ConvertCurency />} />
     <Route path="/statisticPage" element={<StatisticPage />} />  */}
        {/* 404 rounte */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
