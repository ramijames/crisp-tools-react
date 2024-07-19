import ToolHeader from '../../components/common/ToolHeader';
import ConversionToolsList from '../../components/toollists/conversiontools';
import { Link } from 'react-router-dom';

function ConversionTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Conversion Tools" description="A collection of tools for converting between common formats." />
      <ConversionToolsList />
    </section>
  );
}

export default ConversionTools;