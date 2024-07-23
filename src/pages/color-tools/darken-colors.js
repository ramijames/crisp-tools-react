import React, { useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import style from './color-palette-generator.module.css';
import { HexColorPicker } from 'react-colorful';
import { ConvertHexToRGB, ConvertRGBToHex } from '../../utils/color-conversion';
import chroma from 'chroma-js';

function DarkenColorPage () {
  const [color, setColor] = useState("#cc9900");

  // For RGB output
  const [red, green, blue] = ConvertHexToRGB(color);

  function GenerateColorPalette(color) {
    const output = {
      darken: []
    };

    // Darken the color
    output.darken = chroma.scale([color, 'black']).mode('lch').colors(5);

    return output;
  }

  const colorPalette = GenerateColorPalette(color);

  return (
    <main className="CrispTool hasBackTo">
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

export default DarkenColorPage;