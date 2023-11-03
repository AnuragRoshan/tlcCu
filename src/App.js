import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HomePage from './Page/HomePage';
import DetailPage from './Page/DetailPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
