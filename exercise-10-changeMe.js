function changeMe(arr) {
  // you can only write your code here!
  // var obj = {};
  var tahunSekarang = 2020;
  if(arr.length === 0) console.log('""');
  for (var i = 0; i < arr.length; i++) {
    var name = (i + 1) + ". " + arr[i][0] + " " + arr[i][1];
    var obj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2]
    }
    tahunSekarang - arr[3] > 0 ? obj.age = tahunSekarang - arr[3] : obj.age = "Invalid Birth Year";
    console.log(`${name} :`);
    console.log(obj);
  }
}

// TEST CASES
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""