import React, { useEffect, useState } from 'react';
import Input from '../../components/chrome/Input';
import BackTo from '../../components/common/BackTo';
import ToolHeader from '../../components/common/ToolHeader';
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
      },
      format: "html"
    });

    const text = lorem.generateParagraphs(parseInt(numParagraphs, 10));

    console.log(text);

    setGeneratedText(text);
  
  }, [numParagraphs]);

  return (
    <main className="CrispTool">
      <BackTo to="/text-tools">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13" stroke="black" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <p>Back to Text Tools</p>
      </BackTo>
      <section className="ToolPanel">
        <ToolHeader title="Lorem Ipsum Generator" description="Generate text content for use in your designs and mockups" />
        <div className="ToolPanel__form">
          <div className="ToolPanel__form__input">
            <Input
              htmlFor="numParagraphs"
              label="Number of Paragraphs"
              type="number"
              id="numParagraphs"
              value={numParagraphs}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setNumParagraphs(value < 1 ? 1 : value);
              }}
            />
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