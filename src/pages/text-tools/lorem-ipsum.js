import React, { useEffect, useState } from 'react';
import Input from '../../components/chrome/Input';
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

    setGeneratedText(text);
  
  }, [numParagraphs]);

  return (
    <main className="CrispTool hasBackTo">
      <section className="ToolPanel">
        <ToolHeader title="Lorem Ipsum Generator" description="Generate text content for use in your designs and mockups" />
        <div className={styles.ToolPanel__form}>
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