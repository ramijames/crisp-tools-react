import { Link } from 'react-router-dom';

function ConversionToolsList() {
  return (
    <section className="ToolList">
      <Link to="/conversion-tools/yaml-to-json" className="LinkIcon">
        <img src="/yaml-json.svg" alt="YAML to JSON" />
        YAML / JSON
      </Link>
      <Link to="/conversion-tools/md-to-html" className="LinkIcon">
        <img src="/md-html.svg" alt="MD to HTML" />
        MD / HTML
      </Link>
    </section>
  );
}

export default ConversionToolsList;