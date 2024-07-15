import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import BackTo from '../../components/common/BackTo';
import Button from '../../components/chrome/Button';
import style from './conversiontools.module.css';
import jsYaml from 'js-yaml';

function JsonYamlConverter() {
  const [mode, setMode] = useState('YAMLtoJSON');
  const [yamlInput, setYamlInput] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [conversionOutput, setConversionOutput] = useState('');

  const handleYamlInputChange = (event) => {
    if (mode === 'YAMLtoJSON') {
      setYamlInput(event.target.value);
    } else {
      setJsonInput(event.target.value);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'YAMLtoJSON' ? 'JSONtoYAML' : 'YAMLtoJSON');
    
    // Clear to default empty state
    setYamlInput('');
    setJsonInput('');
    setConversionOutput('');
  };

  const convert = () => {
    if (mode === 'YAMLtoJSON') {
      convertYamlToJson();
    } else {
      convertJsonToYaml();
    }
  };

  const convertYamlToJson = () => {
    try {
      const parsedInput = jsYaml.load(yamlInput);
      const conversionOutput = JSON.stringify(parsedInput, null, 2);
      setConversionOutput(conversionOutput); 
    } catch (error) {
      setConversionOutput(`Error converting YAML to JSON: ${error.message}. Please check your JSON syntax.`);
    }
  };
  
  const convertJsonToYaml = () => {
    try {
      const parsedInput = JSON.parse(jsonInput); 
      const conversionOutput = jsYaml.dump(parsedInput);
      setConversionOutput(conversionOutput); 
    } catch (error) {
      setConversionOutput(`Error converting JSON to YAML: ${error.message}. Please check your JSON syntax.`);
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
        <div className={style.ToolTop}>
          {
            mode === 'YAMLtoJSON' ? 
            <ToolHeader title="YAML to JSON Converter" description="Quickly convert between formats" /> :
            <ToolHeader title="JSON to YAML Converter" description="Quickly convert between formats" />
          }
          <div className={style.Toggle}>
            {/* <Button onClick={toggleMode} className={style.Button}>Switch to {mode === 'YAMLtoJSON' ? 'YAML to JSON' : 'JSON to YAML'}</Button> */}
            <label class={style.TypeToggle}>
              <span>YAML to JSON</span>
              <input type="checkbox" checked={mode === 'JSONtoYAML'} onChange={toggleMode} />
              <div class={style.Slider}></div>
              <span>JSON to YAML</span>
            </label>
          </div>
        </div>
        <section className={style.Converter}>
          <section className={style.YamlConverterContent}>
            <textarea
              value={mode === 'YAMLtoJSON' ? yamlInput : jsonInput}
              onChange={handleYamlInputChange}
              placeholder={mode === 'YAMLtoJSON' ? "Paste YAML here" : "Paste JSON here"}
              rows="10"
              className={style.Textarea}
            ></textarea>
            <section className={style.ButtonColumn}>
              <Button onClick={convert} className={style.Button}>Convert to {mode === 'YAMLtoJSON' ? 'JSON' : 'YAML'}</Button>
            </section>
            <pre className={style.Pre}>{conversionOutput}</pre>
          </section>
          
        </section>
      </section>
    </main>
  );
}

export default JsonYamlConverter;