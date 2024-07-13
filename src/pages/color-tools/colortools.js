import ToolHeader from '../../components/common/ToolHeader';
import { Link } from 'react-router-dom';

function ColorTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Color Tools" description="A collection of tools for generating, manipulating, and managing colors." />
      <Link to="/color-tools/color-palette-generator">Color Palette Generator</Link>
    </section>
  );
}

export default ColorTools;