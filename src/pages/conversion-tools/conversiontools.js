import ToolHeader from '../../components/common/ToolHeader';
import { Link } from 'react-router-dom';

function ConversionTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Conversion Tools" description="A collection of tools for converting between common formats." />
      <section className="ToolList">
        <Link to="/conversion-tools/yaml-to-json" className="LinkIcon">
          <img src="/yaml-json.svg" alt="YAML to JSON" />
          YAML to JSON Converter
        </Link>
      </section>
    </section>
  );
}

export default ConversionTools;