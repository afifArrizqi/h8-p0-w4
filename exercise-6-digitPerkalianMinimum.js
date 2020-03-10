function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var digitMinimum = Infinity;
  var faktor;
  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      faktor = i + "" + (angka / i);
    }
    if (faktor.length < digitMinimum) digitMinimum = faktor.length;
  }
  return digitMinimum;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2