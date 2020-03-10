function cariMedian(arr) {
  // you can only write your code here!
  var middleLength = (arr.length - 1) / 2;
  if (arr.length % 2 === 0) {
    return (arr[(middleLength - 0.5)] + arr[(middleLength + 0.5)]) / 2;
  } else {
    return arr[middleLength];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5