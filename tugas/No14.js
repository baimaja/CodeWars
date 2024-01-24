function colorOf(r, g, b) {
    var redHex = r.toString(16).padStart(2, '0');
    var greenHex = g.toString(16).padStart(2, '0');
    var blueHex = b.toString(16).padStart(2, '0');
  
    var colorCode = '#' + redHex + greenHex + blueHex;
    
    return colorCode;
  }
  
  
  