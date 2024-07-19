import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import BackTo from '../../components/common/BackTo';
import style from './color-palette-generator.module.css';
import { HexColorPicker } from 'react-colorful';
import { ConvertHexToRGB, ConvertRGBToHex } from '../../utils/color-conversion';
import chroma from 'chroma-js';

function ColorPaletteGeneratorPage () {
  const [color, setColor] = useState("#cc9900");

  // For RGB output
  const [red, green, blue] = ConvertHexToRGB(color);

  function GenerateColorPalette(color) {
    const output = {
      lighten: [],
      darken: []
    };
    
    // Lighten the color
    output.lighten = chroma.scale([color, 'white']).mode('lch').colors(5);

    // Darken the color
    output.darken = chroma.scale([color, 'black']).mode('lch').colors(5);

    return output;
  }

  const colorPalette = GenerateColorPalette(color);

  return (
    <main className="CrispTool hasBackTo">
      <BackTo to="/color-tools">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13" stroke="black" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        Back to Color Tools
      </BackTo>
      <section className="ToolPanel">
        <ToolHeader title="Color Palette Generator" description="Generate a color palette based on a single color" />
        <section className={style.ColorPaletteGenerator}>
          <section className={style.ColorPaletteSelect}>
            <HexColorPicker color={color} onChange={setColor} />
            <div className={style.ColorSelectHEX}>
              <div>HEX <span className={style.number}>{color}</span></div>
            </div>
            <div className={style.ColorSelectRGB}>
              <div>R <span className={style.number}>{red}</span></div>
              <div>G <span className={style.number}>{green}</span></div>
              <div>B <span className={style.number}>{blue}</span></div>
            </div>
          </section>
          <section className={style.ColorPaletteOutput}>
            <h2>Lighten</h2>
            <div className={style.allColors}>
              <div className={style.singleColor} style={{background:colorPalette.lighten[0]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.lighten[1]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.lighten[2]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.lighten[3]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.lighten[4]}}></div>
              <div className={style.singleColorValue}>{colorPalette.lighten[0]}</div>
              <div className={style.singleColorValue}>{colorPalette.lighten[1]}</div>
              <div className={style.singleColorValue}>{colorPalette.lighten[2]}</div>
              <div className={style.singleColorValue}>{colorPalette.lighten[3]}</div>
              <div className={style.singleColorValue}>{colorPalette.lighten[4]}</div>
            </div>

            <h2>Darken</h2>
            <div className={style.allColors}>
              <div className={style.singleColor} style={{background:colorPalette.darken[0]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.darken[1]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.darken[2]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.darken[3]}}></div>
              <div className={style.singleColor} style={{background:colorPalette.darken[4]}}></div>
              <div className={style.singleColorValue}>{colorPalette.darken[0]}</div>
              <div className={style.singleColorValue}>{colorPalette.darken[1]}</div>
              <div className={style.singleColorValue}>{colorPalette.darken[2]}</div>
              <div className={style.singleColorValue}>{colorPalette.darken[3]}</div>
              <div className={style.singleColorValue}>{colorPalette.darken[4]}</div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default ColorPaletteGeneratorPage;