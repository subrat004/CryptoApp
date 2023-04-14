import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import Home from './components/Home';
import CoinDetails from './components/CoinDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/exchanges" element={<Exchanges></Exchanges>}></Route>
        <Route path="/coin/:id" element={<CoinDetails></CoinDetails>}>
          {' '}
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
