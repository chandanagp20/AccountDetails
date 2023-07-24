import React from 'react';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import CreditCard from './Home/Bottomview/CreditCard';


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-card" element={<CreditCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


