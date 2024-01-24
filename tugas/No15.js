
function howManySmaller(arr, n) {
    var formattedArr = arr.map(function(num) {
      return parseFloat(num.toFixed(2));
    });
  
    var count = 0;
    for (var i = 0; i < formattedArr.length; i++) {
      if (formattedArr[i] < n) {
        count++;
      }
    }
  
    return count;
  }
  
  