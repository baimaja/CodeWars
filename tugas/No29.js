function bigToSmall(arr) {
    const flatArray = [].concat(...arr);
  
    const sortedArray = flatArray.sort((a, b) => b - a);
  
    const result = sortedArray.join(">");
    
    return result;
  }
  