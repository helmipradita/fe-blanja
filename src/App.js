import { useState, useEffect } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import MyProduct from './pages/Dashboard/MyProduct/index';
import Profile from './pages/Dashboard/Profile';
import Login from './pages/Auth/Login';
import LoginCustomer from './pages/Auth/Login';
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
import MyCheckout from './pages/Dashboard/MyCheckout';
import Categories from './pages/Dashboard/Categories';
import AuthChecker from './components/AuthChecker';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [whoLogin, setWhoIsLogin] = useState('');
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user.role === 'seller') {
      setWhoIsLogin('seller');
    } else if (user.role === 'customer') {
      setWhoIsLogin('customer');
    } else {
      setWhoIsLogin('guest');
    }
  });

  console.log(whoLogin);
  const [title, setTitle] = useState('test');

  if (whoLogin === 'seller') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detailproduct/:id" element={<DetailProduct />} />
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
          <Route
            path="/dashboard/myproduct"
            element={
              <AuthChecker>
                <MyProduct />
              </AuthChecker>
            }
          />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/my-bag" element={<MyBag />} />
          <Route path="/dashboard/my-checkout" element={<MyCheckout />} />
          <Route path="/dashboard/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (whoLogin === 'customer') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detailproduct/:id" element={<DetailProduct />} />
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
          <Route
            path="/dashboard/myproduct"
            element={
              <AuthChecker>
                <MyProduct />
              </AuthChecker>
            }
          />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/my-bag" element={<MyBag />} />
          <Route path="/dashboard/my-checkout" element={<MyCheckout />} />
          <Route path="/dashboard/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (whoLogin === 'guest') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detailproduct/:id" element={<DetailProduct />} />
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
          <Route
            path="/dashboard/myproduct"
            element={
              <AuthChecker>
                <MyProduct />
              </AuthChecker>
            }
          />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/my-bag" element={<MyBag />} />
          <Route path="/dashboard/my-checkout" element={<MyCheckout />} />
          <Route path="/dashboard/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
