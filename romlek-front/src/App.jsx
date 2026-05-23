import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Products';
import Events from './pages/Events';
import Contents from './pages/Contents';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/goals" element={<Product />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contents" element={<Contents />} />
      </Routes>
    </div>
  );
}

export default App;
