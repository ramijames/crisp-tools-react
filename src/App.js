
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Tools
import Home from './pages/home';
import ColorTools from './pages/colortools';
import TextTools from './pages/texttools';
import StyleTools from './pages/styletools';

// General Styles
import './App.css';

import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <div className="Crisp">
        <Header />
        <main className="CrispContent">
          <Sidebar />
          <section className="CrispPages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/color-tools" element={<ColorTools />} />
              <Route path="/text-tools" element={<TextTools />} />
              <Route path="/style-tools" element={<StyleTools />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
