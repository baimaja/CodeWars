function sortIt(arr) {
    const newArray = [...arr];
  
    newArray.sort((a, b) => {
      const countA = arr.filter((num) => num === a).length;
      const countB = arr.filter((num) => num === b).length;
  
      if (countA !== countB) {
        return countA - countB;
      }
  
      return b - a;
    });
  
    return newArray;
  }