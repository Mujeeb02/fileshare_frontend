import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home';
import ContactCard from './components/contact_card';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<ContactCard/>}></Route>
    </Routes>
  );
}

export default App;
