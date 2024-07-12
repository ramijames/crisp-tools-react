import { Link } from 'react-router-dom';

function TextTools() {
  return (
    <div>
      <h1>Text Tools</h1>
      <Link to="/text-tools/lorem-ipsum">Lorem Ipsum Generator</Link>
    </div>
  );
}

export default TextTools;