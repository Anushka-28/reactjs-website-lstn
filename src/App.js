import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;