import React from 'react';
import './index.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import texts from './data/dataText.json';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <BrowserRouter basename='/Argent-Bank'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path='/profile'
          element={isConnected ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer text={texts.footer} />
    </BrowserRouter>
  );
}

export default App;