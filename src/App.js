import React from 'react';
import './App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Journey from './pages/Journey/Journey';
import Footer from './components/Footer/Footer';
import Photos from './pages/Photos/Photos';
import Cycling from './pages/Cycling/Cycling';

const App = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/cycling" element={<Cycling />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
    <Footer />
  </HashRouter>
);

export default App;
