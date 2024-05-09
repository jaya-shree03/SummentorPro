import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/pages/Home/Home";
import { PastEditions } from "./Components/pages/PastEditions";
import { Awards } from "./Components/pages/Awards";
import { Nomination } from "./Components/pages/Nomination";
import { Blog } from "./Components/pages/Blog";
import { Contact } from "./Components/pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Components/Footer";
// import { PastEditionsImg } from "./Components/pages/Home/PastEditionsImg";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past" element={<PastEditions />} />
        <Route path="/award" element={<Awards />} />
        <Route path="/nomination" element={<Nomination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
