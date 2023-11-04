import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HomePage from './Page/HomePage';
import DetailPage from './Page/DetailPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Page/About';
import Course from './Page/Course';
import Research from './Page/Research';
import Awards from './Page/Awards';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/research" element={<Research />} />
          <Route exact path="/awards" element={<Awards />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
