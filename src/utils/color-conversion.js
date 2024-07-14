// Util for color conversion

function ConvertHexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  
  // Returns an array of RGB values
  return [ r, g, b ];
}

function ConvertRGBToHex(r, g, b) {
  const red = r.toString(16).padStart(2, '0');
  const green = g.toString(16).padStart(2, '0');
  const blue = b.toString(16).padStart(2, '0');
  
  // Returns a HEX color
  return `#${red}${green}${blue}`;
}

export { ConvertHexToRGB, ConvertRGBToHex };