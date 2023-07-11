import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Clients from './page/Clients';
import Contact from './page/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
