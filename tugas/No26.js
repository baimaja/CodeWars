function isolateIt(arr) {
    return arr.map((str) => {
      if (str.length % 2 === 0) {
        const middle = str.length / 2;
        return str.slice(0, middle) + '|' + str.slice(middle);
      } else {
        const middle = Math.floor(str.length / 2);
        return str.slice(0, middle) + '|' + str.slice(middle + 1);
      }
    });
  }
  
  