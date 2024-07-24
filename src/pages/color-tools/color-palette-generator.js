import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import style from './color-palette-generator.module.css';
import { HexColorPicker } from 'react-colorful';
import { ConvertHexToRGB, ConvertRGBToHex } from '../../utils/color-conversion';
import Button from '../../components/chrome/Button';
import chroma from 'chroma-js';
import color from 'color';

function ColorPaletteGeneratorPage () {
  const [baseColor, setBaseColor] = useState('#ffffff');
  const [numColors, setNumColors] = useState(5);
  const [colorPalette, setColorPalette] = useState([]);

  // Generate a random color
  function GenerateRandomColor() {
    const randomColor = chroma.random();
    setBaseColor(randomColor.hex());
  }

  // Generate an initial color palette
  useEffect(() => {
    generateColorPalette();
  }, [baseColor, numColors]);

  console.log(baseColor);

  const generateColorPalette = () => {
    // Logic to generate color palette based on baseColor and numColors
    const newPalette = Array.from({ length: numColors }, (_, i) => {
      // Example logic to generate colors
      return chroma.random();
    });
    setColorPalette(newPalette);
  };

  const handleNumColorsChange = (e) => {
    setNumColors(Number(e.target.value));
  };

  const generateRandomBaseColor = () => {
    const randomColor = chroma.random();
    setBaseColor(randomColor);
  };

  return (
    <main className="CrispTool hasBackTo">
      <section className="ToolPanel">
        <ToolHeader title="Color Palette Generator" description="Generate a color palette based on a single color" />
        <section className={style.ColorPaletteGenerator}>
          <section className={style.ColorPaletteOutput}>
            <div className={style.allColors}>
              {colorPalette.map((color, index) => (
                <div key={index} className={style.singleColor} style={{background:color}}></div>
              ))}
              {/* <div className={style.singleColor} style={{background:colorPalette[0]}}></div>
              <div className={style.singleColor} style={{background:colorPalette[1]}}></div>
              <div className={style.singleColor} style={{background:colorPalette[2]}}></div>
              <div className={style.singleColor} style={{background:colorPalette[3]}}></div>
              <div className={style.singleColor} style={{background:colorPalette[4]}}></div> */}
            </div>
          </section>
        </section>
        <section className={style.ColorManager}>
          <HexColorPicker color={baseColor} onChange={setBaseColor} />
          <input type="number" value={numColors} onChange={(e) => setNumColors(e.target.value)} />
          <Button onClick={GenerateRandomColor}>
            Random BaseColor
          </Button>
        </section>
      </section>
    </main>
  );
}

export default ColorPaletteGeneratorPage;