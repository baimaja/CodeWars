function threeInOne(arr) {
    const newArray = arr.slice();
    const result = [];
  
    for (let i = 0; i < newArray.length; i += 3) {
      const sum = newArray.slice(i, i + 3).reduce((acc, curr) => acc + curr, 0);
      result.push(sum);
    }
  
    return result;
  }