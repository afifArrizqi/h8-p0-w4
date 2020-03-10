function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var listPenumpang = []
  for (var i = 0; i < arrPenumpang.length; i++) {
    var penumpang = {
      nama: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: 0
    };
    var banyakRute = 0;
    for (var j = 0; j < rute.length && rute[j] !== arrPenumpang[i][2]; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        while (rute[j] !== arrPenumpang[i][2]) {
          banyakRute++;
          j++;
        }
      }
    }
    penumpang.bayar = 2000 * banyakRute;
    listPenumpang.push(penumpang);
  }
  return listPenumpang;
}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]