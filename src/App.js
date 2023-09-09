import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import Alert from "./Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/textForm" element={<TextForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
