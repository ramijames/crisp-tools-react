import { Link } from 'react-router-dom';

function TextTools() {
  return (
    <section className="ToolPanel">
      <h1>Text Tools</h1>
      <Link to="/text-tools/lorem-ipsum">Lorem Ipsum Generator</Link>
    </section>
  );
}

export default TextTools;