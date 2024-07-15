import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import BackTo from '../../components/common/BackTo';
import Button from '../../components/chrome/Button';
import style from './conversiontools.module.css';
import jsYaml from 'js-yaml';

function JsonYamlConverter() {
  const [yamlInput, setYamlInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');

  const handleYamlInputChange = (event) => {
    setYamlInput(event.target.value);
  };

  const convertYamlToJson = () => {
    try {
      const result = jsYaml.load(yamlInput);
      setJsonOutput(JSON.stringify(result, null, 2));
    } catch (error) {
      // Enhanced error message for clarity
      setJsonOutput(`Error converting YAML to JSON: ${error.message}. Please check your YAML syntax, especially for correct indentation and colons after keys.`);
    }
  };

  return (
    <main className="CrispTool">
      <BackTo to="/conversion-tools">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13" stroke="black" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        Back to Conversion Tools
      </BackTo>
      <section className="ToolPanel">
        <ToolHeader title="YAML to JSON Converter" description="Quickly convert YAML to JSON format" />
        <section className={style.Converter}>
          <section className={style.YamlConverterContent}>
            <textarea
              value={yamlInput}
              onChange={handleYamlInputChange}
              placeholder="Paste YAML here"
              rows="10"
              className={style.Textarea}
            ></textarea>
            <section className={style.ButtonColumn}>
              <Button onClick={convertYamlToJson} className={style.Button}>Convert to JSON</Button>
            </section>
            <pre className={style.Pre}>{jsonOutput}</pre>
          </section>
          
        </section>
      </section>
    </main>
  );
}

export default JsonYamlConverter;