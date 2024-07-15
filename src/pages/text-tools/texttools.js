import ToolHeader from '../../components/common/ToolHeader';
import { Link } from 'react-router-dom';

function TextTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Text Tools" description="A collection of tools for generating, manipulating, and managing text." />
      <section className="ToolList">
        <Link to="/text-tools/lorem-ipsum" className="LinkIcon">
          <img src="/lorem-ipsum.svg" alt="Lorem Ipsum Generator" />
          Lorem Ipsum Generator
        </Link>
      </section>
    </section>
  );
}

export default TextTools;