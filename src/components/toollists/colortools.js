import { Link } from 'react-router-dom';

function ColorToolsList() {
  return (
    <section className="ToolList">
      <Link to="/color-tools/color-palette-generator" className="LinkIcon">
        <img src="/color-palette-generator.svg" alt="Color Palette Generator" />
        Color Palette Generator
      </Link>
      <Link to="/color-tools/darken-color" className="LinkIcon">
        <img src="/color-palette-generator.svg" alt="Color Palette Generator" />
        Darken Color
      </Link>
    </section>
  );
}

export default ColorToolsList;