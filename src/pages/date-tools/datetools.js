import ToolHeader from '../../components/common/ToolHeader';
import DateToolsList from '../../components/toollists/datetools';
import { Link } from 'react-router-dom';

function ConversionTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Date Tools" description="Understanding time and dates" />
      <DateToolsList />
    </section>
  );
}

export default ConversionTools;