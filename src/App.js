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
import Events from './Page/Events';
import Banner from './Components/Banner';
import Journal from './Page/Journal';
import Contactus from './Page/Contactus';
import Flowbanner from './Components/Flowbanner';



function App() {
  return (
    <>
      <Router>
        <Banner />

        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/research" element={<Research />} />
          <Route exact path="/awards" element={<Awards />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/journal" element={<Journal />} />
          <Route exact path="/contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
