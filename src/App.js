
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Tools
import Home from './pages/home';
import ColorTools from './pages/color-tools/colortools';
  import ColorPaletteGenerator from './pages/color-tools/color-palette-generator';
  import DarkenColor from './pages/color-tools/darken-colors';
import TextTools from './pages/text-tools/texttools';
  import LoremIpsum from './pages/text-tools/lorem-ipsum';
import ConversionTools from './pages/conversion-tools/conversiontools';
  import YamlJsonConverter from './pages/conversion-tools/yaml-json';
  import MdHtmlConverter from './pages/conversion-tools/markdown-html';
import StyleTools from './pages/style-tools/styletools';
import DateTools from './pages/date-tools/datetools';
  import MoonPhases from './pages/date-tools/moon-phases';

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
          <section className="CrispPages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/color-tools" element={<ColorTools />} />
                <Route path="/color-tools/color-palette-generator" element={<ColorPaletteGenerator />} />
                <Route path="/color-tools/darken-color" element={<DarkenColor />} />
              <Route path="/text-tools" element={<TextTools />} />
                <Route path="/text-tools/lorem-ipsum" element={<LoremIpsum />} />
              {/* <Route path="/style-tools" element={<StyleTools />} /> */}
              <Route path="/conversion-tools" element={<ConversionTools />} />
                <Route path="/conversion-tools/yaml-to-json" element={<YamlJsonConverter />} />
                <Route path="/conversion-tools/md-to-html" element={<MdHtmlConverter />} />
              <Route path="/date-tools" element={<DateTools />} />
                <Route path="/date-tools/moon-phases" element={<MoonPhases />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
