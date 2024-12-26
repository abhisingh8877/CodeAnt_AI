import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup_page from './Components/Signup_page';
import Main from './Components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup_page />} />
        <Route path="/Main/*" element={<Main />} /> {/* Updated to include `/*` */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
