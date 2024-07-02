import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Component/Navebar/NavigationBar";
import "./App.css";
import Footer from "./Component/FooterArea/Footer";
import Donate from "./Component/DonatePage/Donate";
import ContactUsPage from "./Component/ContactUsPage/ContactUsPage";
import AboutUs from "./Component/AboutPage/AboutUs";
import Home from "./Component/HeroSection/Home";
import NoMatch from "./Component/NoMatch/NoMatch";
import Blogpage from "./Component/BlogPage/Blogpage"; // Ensure this matches the file name
import DaArtical from "./Component/BlogPage/DatailsArticals/DaArtical";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog/:topic/:title" element={<DaArtical />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
