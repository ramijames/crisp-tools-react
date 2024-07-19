import ToolHeader from '../components/common/ToolHeader';
import ColorToolsList from '../components/toollists/colortools';
import ConversionToolsList from '../components/toollists/conversiontools';
import DateToolsList from '../components/toollists/datetools';
import TextToolsList from '../components/toollists/texttools';

function Home() {
  return (
    <section className="ToolPanel">
      <section className="ToolGroup">
        <ToolHeader title="Color Tools" description="A collection of tools for generating, manipulating, and managing colors." />
        <ColorToolsList />
      </section>

      <section className="ToolGroup">
        <ToolHeader title="Conversion Tools" description="A collection of tools for converting between common formats." />
        <ConversionToolsList />
      </section>

      <section className="ToolGroup">
        <ToolHeader title="Date Tools" description="Understanding time and dates" />
        <DateToolsList />
      </section>
      
      <section className="ToolGroup">
        <ToolHeader title="Text Tools" description="Tools for manipulating and analyzing text." />
        <TextToolsList />
      </section>
    </section>
  );
}

export default Home;