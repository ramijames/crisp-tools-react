import ToolHeader from '../../components/common/ToolHeader';
import TextToolsList from '../../components/toollists/texttools';
import { Link } from 'react-router-dom';

function TextTools() {
  return (
    <section className="ToolPanel">
      <ToolHeader title="Text Tools" description="A collection of tools for generating, manipulating, and managing text." />
      <TextToolsList />
    </section>
  );
}

export default TextTools;