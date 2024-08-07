import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
