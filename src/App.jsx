import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Otp from './Otp';
import Kyc from './Kyc';
import Terms from './Terms';
import Congrats from './Congrats';
import Account from './Account';
import Card from './Card';
import ActivateCard from './ActivateCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/account" element={<Account />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card/activate" element={<ActivateCard />} />
      </Routes>
    </Router>
  );
}

export default App;