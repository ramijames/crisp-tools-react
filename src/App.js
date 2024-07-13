
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Tools
import Home from './pages/home';
import ColorTools from './pages/color-tools/colortools';
import ColorPaletteGenerator from './pages/color-tools/color-palette-generator';
import TextTools from './pages/text-tools/texttools';
import LoremIpsum from './pages/text-tools/lorem-ipsum';
import StyleTools from './pages/style-tools/styletools';

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
                <Route path="/color-tools/color-palette-generator" element={<ColorPaletteGenerator />} />
              <Route path="/text-tools" element={<TextTools />} />
                <Route path="/text-tools/lorem-ipsum" element={<LoremIpsum />} />
              <Route path="/style-tools" element={<StyleTools />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
