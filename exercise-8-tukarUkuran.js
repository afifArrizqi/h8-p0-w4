function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var abjadLower = "abcdefghijklmnopqrstuvwxyz";
  var abjadUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var kalimatBaru = "";
  for (var i = 0; i < kalimat.length; i++) {
    var checker = true;
    for (var j = 0; j < abjadLower.length; j++) {
      if (kalimat[i] === abjadLower[j]) {
        kalimatBaru += abjadUpper[j];
        checker = false;
      } else if (kalimat[i] === abjadUpper[j]) {
        kalimatBaru += abjadLower[j];
        checker = false;
      }
    }
    if (checker) kalimatBaru += kalimat[i];
  }
  return kalimatBaru;
}
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"