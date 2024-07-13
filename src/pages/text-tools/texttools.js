import ToolHeader from '../../components/common/ToolHeader';
import { Link } from 'react-router-dom';

function TextTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Text Tools" description="A collection of tools for generating, manipulating, and managing text." />
      <Link to="/text-tools/lorem-ipsum">Lorem Ipsum Generator</Link>
    </section>
  );
}

export default TextTools;