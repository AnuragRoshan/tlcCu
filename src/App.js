import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HomePage from './Page/HomePage';
import DetailPage from './Page/DetailPage';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
