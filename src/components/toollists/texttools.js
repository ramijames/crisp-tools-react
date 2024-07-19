import { Link } from 'react-router-dom';

function TextToolsList() {
  return (
    <section className="ToolList">
      <Link to="/text-tools/lorem-ipsum" className="LinkIcon">
        <img src="/lorem-ipsum.svg" alt="Lorem Ipsum Generator" />
        Lorem Ipsum Generator
      </Link>
    </section>
  );
}

export default TextToolsList;