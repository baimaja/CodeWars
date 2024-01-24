function padIt(str, n) {
    let result = str;
    let count = 1;
  
    while (count <= n) {
      if (count % 2 === 1) {
        result = '*' + result;
      } else {
        result = result + '*';
      }
  
      count++;
    }
  
    return result;
  }