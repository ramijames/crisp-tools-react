import ToolHeader from '../../components/common/ToolHeader';
import ColorToolsList from '../../components/toollists/colortools';
import { Link } from 'react-router-dom';

function ColorTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Color Tools" description="A collection of tools for generating, manipulating, and managing colors." />
      <ColorToolsList />
    </section>
  );
}

export default ColorTools;