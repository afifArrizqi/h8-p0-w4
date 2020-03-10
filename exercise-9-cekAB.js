function checkAB(num) {
  // you can only write your code here!
  for(var i = 0; i < num.length; i++)
    if(num[i] === 'a' && num[i+4]==='b'|| num[i] === 'b' && num[i+4]==='a') return true;
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false


// var a = [], b = [], checker = false;
//   for (var i = 0; i < num.length; i++) {
//     if (num[i] === 'a') a.push(i);
//     else if (num[i] === 'b') b.push(i);
//   }
//   for (var i = 0; i < a.length; i++) {
//     for (var j = 0; j < b.length; j++) {
//       var jarak = a[i] - b[j];
//       jarak < 0 ? jarak *= -1 : jarak *= 1;
//       if (jarak === 4) checker = true;
//     }
//   }
//   return checker;