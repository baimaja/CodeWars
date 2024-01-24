function cutIt(arr) {
    var minLength = Math.min(...arr.map(str => str.length));
  
    var result = arr.map(str => str.slice(0, minLength));
  
    return result;
  }
  
  