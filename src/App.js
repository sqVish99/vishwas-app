import React from 'react';
import './App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Journey from './pages/Journey/Journey';
import Footer from './components/Footer/Footer';

const App = () => (
  <HashRouter basename='vishwas-app'>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
    <Footer />
  </HashRouter>
);

export default App;
