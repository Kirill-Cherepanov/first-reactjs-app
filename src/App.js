import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/services/" element={<Services />} exact />
        <Route path="/products/" element={<Products />} exact />
        <Route path="/sign-up/" element={<SignUp />} exact />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
