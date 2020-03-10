function ubahHuruf(kata) {
  // you can only write your code here!
  var kamus = "abcdefghijklmnopqrstuvwxyz"
  var kataBaru = "";
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === 'z') kataBaru += kamus[0];
    for (var j = 0; j < kamus.length; j++) {
      if (kata[i] >= 'a' && kata[i] < 'z' && kata[i] === kamus[j]) kataBaru += kamus[j + 1];
    }
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu