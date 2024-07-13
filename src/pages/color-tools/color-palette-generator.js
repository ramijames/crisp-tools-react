import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import BackTo from '../../components/common/BackTo';
import style from './color-palette-generator.module.css';
import { HexColorPicker } from 'react-colorful';

function ColorPaletteGeneratorPage () {
  const [color, setColor] = useState("#aabbcc");

  function ConvertHexToRGB(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return [ r, g, b ];
  }

  const [red, green, blue] = ConvertHexToRGB(color);

  function GenerateColorPalette(color) {
    // 

    return [ '#424b4f', '#424b4f', '#424b4f', '#424b4f', '#424b4f' ];
  }

  const colorPalette = GenerateColorPalette(red, green, blue);

  return (
    <main className="CrispTool">
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
            <div className={style.allColors}>
              <div className={style.singleColor} style={{background:colorPalette[0]}}>
                {colorPalette[0]}
              </div>
              <div className={style.singleColor} style={{background:colorPalette[1]}}>
                {colorPalette[1]}
              </div>
              <div className={style.singleColor} style={{background:colorPalette[2]}}>
                {colorPalette[2]}
              </div>
              <div className={style.singleColor} style={{background:colorPalette[3]}}>
                {colorPalette[3]}
              </div>
              <div className={style.singleColor} style={{background:colorPalette[4]}}>
                {colorPalette[4]}
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default ColorPaletteGeneratorPage;