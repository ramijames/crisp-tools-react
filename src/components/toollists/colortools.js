import { Link } from 'react-router-dom';

function ColorToolsList() {
  return (
    <section className="ToolList">
      <Link to="/color-tools/color-palette-generator" className="LinkIcon">
        <img src="/color-palette-generator.svg" alt="Color Palette Generator" />
        Color Palette Generator
      </Link>
    </section>
  );
}

export default ColorToolsList;