function shuffleIt(arr, ...swapIndices) {
    swapIndices.forEach(([a, b]) => [arr[a], arr[b]] = [arr[b], arr[a]]);
    return arr;
  }
  
  
  