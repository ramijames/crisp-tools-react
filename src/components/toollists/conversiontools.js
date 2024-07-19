import { Link } from 'react-router-dom';

function ConversionToolsList() {
  return (
    <section className="ToolList">
      <Link to="/conversion-tools/yaml-to-json" className="LinkIcon">
        <img src="/yaml-json.svg" alt="YAML to JSON" />
        YAML to JSON Converter
      </Link>
    </section>
  );
}

export default ConversionToolsList;