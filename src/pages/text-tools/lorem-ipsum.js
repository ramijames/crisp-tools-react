import React, { useEffect, useState } from 'react';
import BackTo from '../../components/atoms/BackTo';
import styles from './lorem-ipsum.module.css';

const { LoremIpsum } = require('lorem-ipsum');

function LoremIpsumPage () {

  // State for input values
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  useEffect(() => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 3
      },
      wordsPerSentence: {
        max: 32,
        min: 8
      }
    });

    const text = lorem.generateParagraphs(parseInt(numParagraphs, 10));

    setGeneratedText(text);
  
  }, [numParagraphs]);

  return (
    <main className="CrispTool">
      <BackTo to="/text-tools">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <p>Back to Text Tools</p>
      </BackTo>
      <section className="ToolPanel">
        <h1>Lorem Ipsum Generator</h1>
        <p>Generate placeholder text for your projects.</p>
        <div className="ToolPanel__form">
          <div className="ToolPanel__form__input">
            <label htmlFor="numParagraphs">Number of Paragraphs</label>
            <input type="number" id="numParagraphs" value={numParagraphs} onChange={(e) => setNumParagraphs(e.target.value)} />
          </div>
        </div>
        <div className={styles.ToolPanel__output}>
          <p>{generatedText}</p>
        </div>
      </section>
    </main>
  )
}

export default LoremIpsumPage;