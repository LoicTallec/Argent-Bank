import React from 'react';
import './index.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profil from './pages/Profil/Profil';
import Error from './pages/Error/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import texts from './data/dataText.json';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />

          <Route path='/profil' element={<Profil />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer text={texts.footer} />
    </BrowserRouter>
  );
}

export default App;