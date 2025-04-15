import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Booking />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;