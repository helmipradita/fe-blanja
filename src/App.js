import { useState } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import MyProduct from './pages/Dashboard/MyProduct';
import Profile from './pages/Dashboard/Profile';
import LoginCustomer from './pages/Auth/Login/Customer';
import LoginSeller from './pages/Auth/Login/Seller';
import RegisterCustomer from './pages/Auth/Register/Customer';
import RegisterSeller from './pages/Auth/Register/Seller';
import ResetPasswordCustomer from './pages/Auth/ResetPassword/Customer';
import ResetPasswordSeller from './pages/Auth/ResetPassword/Seller';
import KonfirmasiPasswordCustomer from './pages/Auth/KonfirmasiPassword/Customer';
import KonfirmasiPasswordSeller from './pages/Auth/KonfirmasiPassword/Seller';
import KonfirmasiPasswordLoginCustomer from './pages/Auth/KonfirmasiPasswordLogin/Customer';
import KonfirmasiPasswordLoginSeller from './pages/Auth/KonfirmasiPasswordLogin/Seller';
import MyBag from './pages/Dashboard/MyBag';
import Categories from './pages/Dashboard/Categories';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';

function App() {
  const [title, setTitle] = useState();
  return (
    <div className="App">
      <header className="App-header">{title}</header>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detailproduct" element={<DetailProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/logincustomer" element={<LoginCustomer />} />
          <Route path="/loginseller" element={<LoginSeller />} />
          <Route path="/registercustomer" element={<RegisterCustomer />} />
          <Route path="/registerseller" element={<RegisterSeller />} />
          <Route
            path="/resetpasswordcustomer"
            element={<ResetPasswordCustomer />}
          />
          <Route
            path="/resetpasswordseller"
            element={<ResetPasswordSeller />}
          />
          <Route
            path="/konfirmasipasswordcustomer"
            element={<KonfirmasiPasswordCustomer />}
          />
          <Route
            path="/konfirmasipasswordseller"
            element={<KonfirmasiPasswordSeller />}
          />
          <Route
            path="/konfirmasipasswordlogincustomer"
            element={<KonfirmasiPasswordLoginCustomer />}
          />
          <Route
            path="/konfirmasipasswordloginseller"
            element={<KonfirmasiPasswordLoginSeller />}
          />
          <Route path="/dashboard/myproduct" element={<MyProduct />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/my-bag" element={<MyBag />} />
          <Route path="/dashboard/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
