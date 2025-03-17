import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Introduction from './Pages/Introduction/Introduction';
import AboutMe from './Pages/AboutMe/AboutMe';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/Home" />} />
      <Route path="Home" element={<Home />} />
      <Route path='Introduction' element={<Introduction />}></Route>
      <Route path='AboutMe' element={<AboutMe />}></Route>
      <Route path='Projects' element={<Projects />}></Route>
      <Route path='Contact' element={<Contact />}></Route>
    </Routes>
  );
};

export default AppRoutes;