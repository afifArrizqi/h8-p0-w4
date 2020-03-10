function urutkanAbjad(str) {
  // you can only write your code here!
  var arrKata = []
  var kataBaru = "";
  for (var i = 0; i < str.length; i++) arrKata.push(str[i]);
  for (var i = 0; i < arrKata.length; i++) {
    for (var j = 0; j < arrKata.length - 1; j++) {
      if (arrKata[j] > arrKata[j + 1]) {
        var temp = arrKata[j];
        arrKata[j] = arrKata[j + 1];
        arrKata[j + 1] = temp;
      }
    }
  }
  for (var i = 0; i < arrKata.length; i++) kataBaru += arrKata[i];
  return kataBaru;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'