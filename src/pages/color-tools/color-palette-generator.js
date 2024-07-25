import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import style from './color-palette-generator.module.css';
import { HexColorPicker } from 'react-colorful';
import { ConvertHexToRGB, ConvertRGBToHex } from '../../utils/color-conversion';
import Button from '../../components/chrome/Button';
import chroma from 'chroma-js';
import color from 'color';

function ColorPaletteGeneratorPage () {
  const [baseColor, setBaseColor] = useState('#ff9900');
  const [numColors, setNumColors] = useState(5);
  const [colorPalette, setColorPalette] = useState({});

  // Generate a random color
  function GenerateRandomColor() {
    const randomColor = chroma.random();
    setBaseColor(randomColor.hex());
  }

  // Generate an initial color palette
  useEffect(() => {
    generateColorPalette();
  }, [baseColor, numColors]);

  console.log(colorPalette);

  // Triad -> rotate by 120
  // Complement -> rotate by 180, create light and dark variants
  // Analogous -> rotate by a small increment, between 15 and 30
  // Split Complement -> rotate by 150 and 210
  // Tetrad -> rotate by 90 and 180, create light and dark variants
  // Square -> rotate by 90, 180, and 270
  // Monochromatic, create light and dark variants

  const generateColorPalette = () => {
    // Logic to generate color palette based on baseColor and numColors
    // const newPalette = Array.from({ length: numColors }, (_, i) => {
    //   // Example logic to generate colors
    //   // return chroma.random();
    //   return color(baseColor).rotate(i * 60).hex();
    // });
    // const newPalette = Object.keys(color).map((color, locked) => {
      
    //   return ;
    // }
    const newPalette = {};

    for (let i = 0; i < numColors; i++) {
      const generatedColor = color(baseColor).rotate(i * 60).hex();
      newPalette[i] = {
        color: generatedColor,
        locked: false
      }
    }

    setColorPalette(newPalette);
  };

  const handleNumColorsChange = (e) => {
    setNumColors(e.target.value);
  };

  const generateRandomBaseColor = () => {
    const randomColor = chroma.random();
    setBaseColor(randomColor.hex());
  };

  const LockColor = (key) => {
    setColorPalette({
      ...colorPalette,
      [key]: {
        ...colorPalette[key],
        locked: !colorPalette[key].locked
      }
    });
  };

  return (
    <main className="CrispTool hasBackTo">
      <section className="ToolPanel">
        <ToolHeader title="Color Palette Generator" description="Generate a color palette based on a single color" />
        <section className={style.ColorPaletteGenerator}>
          <section className={style.ColorPaletteOutput}>
            <div className={style.allColors}>
              {/* {colorPalette.map((color, index) => (
                <div key={index} className={style.singleColor} style={{background:color}}>
                  <HexColorPicker color={color} onChange={(newColor) => setColorPalette(colorPalette.map((c, i) => i === index ? newColor : c))} />
                  <div className={style.singleColorValue}>{color}</div>
                </div>
              ))} */}
              {Object.keys(colorPalette).map((key, index) => (
                <div 
                  key={index} 
                  className={style.singleColor}
                  style={{background:colorPalette[key].color}}
                >
                  <div className={style.singleColorValue}>{colorPalette[key].color}</div>
                  <HexColorPicker 
                    color={colorPalette[key].color} 
                    className={style.HexColorPicker}
                    onChange={(newColor) => setColorPalette({
                      ...colorPalette,
                      [key]: {
                        color: newColor,
                        locked: colorPalette[key].locked
                      }
                    })}
                  />
                  
                  {/* <Button onClick={() => LockColor(key)}>
                    {colorPalette[key].locked ? 'Unlock' : 'Lock'}
                  </Button> */}
                </div>
              ))}
            </div>
          </section>
        </section>
        <section className={style.ColorManager}>
          {/* <HexColorPicker color={baseColor} onChange={setBaseColor} /> */}
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