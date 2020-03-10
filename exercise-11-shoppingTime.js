function shoppingTime(memberId, money) {
  var barang = [{
      produk: "Sepatu Stacattu",
      harga: 1500000
    },
    {
      produk: "Baju Zoro",
      harga: 500000
    },
    {
      produk: "Baju H&N",
      harga: 250000
    },
    {
      produk: "Sweater Uniklooh",
      harga: 175000
    },
    {
      produk: "Chasing Handphone",
      harga: 50000
    }
  ];
  // you can only write your code here!
  var recipe = {
    memberId: memberId,
    money: money
  };
  var arr = [];
  if (memberId === "" || memberId === undefined) return "Mohon maaf, toko X hanya berlaku untuk member saja";
  else if (money < 50000 || money === undefined) return "Mohon maaf, uang tidak cukup";
  for (var i = 0; i < barang.length && money >= 50000; i++) {
    if (money >= barang[i].harga) {
      arr.push(barang[i].produk);
      money -= barang[i].harga;
      // console.log(money);
    }
  }
  recipe.listPurchased = arr;
  recipe.changeMoney = money;
  return recipe;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja