import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContextProvider from "./Components/utils/global.context";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";


const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </Router>
  );
};

export default App;
