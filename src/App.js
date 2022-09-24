import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Resources from "./pages/resources";
import Partners from "./pages/partners";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="resources" element={<Resources/>}/>
          <Route path="partners" element={<Partners/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
