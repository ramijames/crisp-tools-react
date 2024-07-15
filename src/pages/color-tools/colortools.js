import ToolHeader from '../../components/common/ToolHeader';
import { Link } from 'react-router-dom';

function ColorTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Color Tools" description="A collection of tools for generating, manipulating, and managing colors." />
      <section className="ToolList">
        <Link to="/color-tools/color-palette-generator" className="LinkIcon">
          <img src="/color-palette-generator.svg" alt="Color Palette Generator" />
          Color Palette Generator
        </Link>
      </section>
    </section>
  );
}

export default ColorTools;