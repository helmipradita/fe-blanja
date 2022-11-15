import { useState } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import MyProduct from './pages/MyProduct';
import Profile from './pages/Profile';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.js';

function App() {
  const [title, setTitle] = useState();
  return (
    <div className="App">
      <header className="App-header">{title}</header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/myproduct" element={<MyProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
