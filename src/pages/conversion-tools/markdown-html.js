import React, { useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import Button from '../../components/chrome/Button';
import style from './conversiontools.module.css';
import { marked } from 'marked';
import TurndownService from 'turndown';

function MarkdownHtmlConverter() {
  const [mode, setMode] = useState('MDtoHTML');
  const [mdInput, setMdInput] = useState('');
  const [htmlInput, setHtmlInput] = useState('');
  const [conversionOutput, setConversionOutput] = useState('');

  const handleInputChange = (event) => {
    if (mode === 'MDtoHTML') {
      setMdInput(event.target.value);
    } else {
      setHtmlInput(event.target.value);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'MDtoHTML' ? 'HTMLtoMD' : 'MDtoHTML');
    
    // Clear to default empty state
    setMdInput('');
    setHtmlInput('');
    setConversionOutput('');
  };

  const convert = () => {
    if (mode === 'MDtoHTML') {
      convertMdToHtml();
    } else {
      convertHtmlToMd();
    }
  };

  const convertMdToHtml = () => {
    try {
      const conversionOutput = marked(mdInput);
      setConversionOutput(conversionOutput);
    } catch (error) {
      setConversionOutput(`Error converting Markdown to HTML: ${error.message}.`);
    }
  };

  const convertHtmlToMd = () => {
    try {
      const turndownService = new TurndownService();
      const conversionOutput = turndownService.turndown(htmlInput);
      setConversionOutput(conversionOutput);
    } catch (error) {
      setConversionOutput(`Error converting HTML to Markdown: ${error.message}.`);
    }
  };

  return (
    <main className="CrispTool">
      <section className="ToolPanel">
        <div className={style.ToolTop}>
          {
            mode === 'MDtoHTML' ? 
            <ToolHeader title="Markdown to HTML Converter" description="Quickly convert between formats" /> :
            <ToolHeader title="HTML to Markdown Converter" description="Quickly convert between formats" />
          }
          <div className={style.Toggle}>
            <label className={style.TypeToggle}>
              <span>Markdown to HTML</span>
              <input type="checkbox" checked={mode === 'HTMLtoMD'} onChange={toggleMode} />
              <div className={style.Slider}></div>
              <span>HTML to Markdown</span>
            </label>
          </div>
        </div>
        <section className={style.Converter}>
          <section className={style.ConverterContent}>
            <textarea
              value={mode === 'MDtoHTML' ? mdInput : htmlInput}
              onChange={handleInputChange}
              placeholder={mode === 'MDtoHTML' ? "Paste Markdown here" : "Paste HTML here"}
              rows="10"
              className={style.Textarea}
            ></textarea>
            <section className={style.ButtonColumn}>
              <Button onClick={convert} className={style.Button}>Convert to {mode === 'MDtoHTML' ? 'HTML' : 'Markdown'}</Button>
            </section>
            <pre className={style.Pre}>{conversionOutput}</pre>
          </section>
          
        </section>
      </section>
    </main>
  );
}

export default MarkdownHtmlConverter;