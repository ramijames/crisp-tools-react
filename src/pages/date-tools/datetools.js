import ToolHeader from '../../components/common/ToolHeader';
import { Link } from 'react-router-dom';

function ConversionTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Date Tools" description="Understanding time and dates" />
      <section className="ToolList">
        <Link to="/date-tools/moon-phases" className="LinkIcon">
          <img src="/moon-phases.svg" alt="Moon Phases" />
          Moon Phases
        </Link>
      </section>
    </section>
  );
}

export default ConversionTools;