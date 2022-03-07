import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/loginPage';
import HomePage from './routes/homePage';
// import RegisterPage from './routes/register/registerPage';
// import { PrivateRoute } from './component/routing';
// import NotFoundPage from './routes/page404'
// import StatisticPage from './routes/statistic/statisticPage'
// import ConvertCurency from './component/convertCurency'
function App() {
  return (
    <Router>
    <Routes>

      <Route exact path="/homepage" element={<HomePage />} />
      <Route exact path="/" element={<LoginPage />} />
      {/* <Route
        exact
        path="/"
        element={
      
            <HomePage />
          
        }
      />       
     <Route path="/convertCurency" element={<ConvertCurency />} />
     <Route path="/statisticPage" element={<StatisticPage />} />  */}
     {/* 404 rounte */}
     {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
