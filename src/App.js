import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HomePage from './Page/HomePage';
import DetailPage from './Page/DetailPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Page/About';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
