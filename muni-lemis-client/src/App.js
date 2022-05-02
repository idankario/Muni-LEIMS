<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/loginPage";
import HomePage from "./routes/homePage";
import StatisticPage from "./routes/statisticPage";
import NotFoundPage from "./routes/page404";
import MapPage from "./routes/mapPage";
import ImgUpload from "./routes/imageUpload";
import Reports from "./routes/reports";
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/loginPage';
import HomePage from './routes/homePage';
import StatisticPage from './routes/statisticPage';
// import { PrivateRoute } from './components/routing';
import NotFoundPage from './routes/page404';
import MapPage from './routes/mapPage';
import ImgUpload from './routes/imageUpload'
import Reports from './routes/reports';
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
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
=======
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/" element={<Reports dataType="cities" />}/>
        {/* <Route exact path="/" element={<LoginPage />} /> */}
        <Route exact path="/ImgUpload" element={<ImgUpload />} />
        <Route exact path="/municipalities" element={<Reports dataType='municipalities' />} />
        <Route exact path="/cities" element={<Reports dataType='cities' />} />
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246
        <Route exact path="/statisticPage" element={<StatisticPage />} />
        <Route exact path="/mappage" element={<MapPage />} />
        {/* 404 rounte */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
