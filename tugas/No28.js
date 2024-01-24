function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let currentStr = String(arr[i]);
      let nextStr = String(arr[i + 1]);
  
      if (currentStr === nextStr.split("").reverse().join("")) {
        return [arr[i], arr[i + 1]];
      }
    }
  
    return [-1, -1];
  }
  
  