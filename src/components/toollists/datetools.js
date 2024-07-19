import { Link } from 'react-router-dom';

function DateToolsList() {
  return (
    <section className="ToolList">
      <Link to="/date-tools/moon-phases" className="LinkIcon">
        <img src="/moon-phases.svg" alt="Moon Phases" />
        Moon Phases
      </Link>
    </section>
  );
}

export default DateToolsList;