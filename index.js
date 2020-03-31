function toRoman(num) {
  var kamus = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  
  if(num == 0){
    return ''
  }
  for (let i = 0; i < angka.length; i++) {
    while (num >= angka[i]){
      num -= angka[i]
      return kamus[i] + toRoman(num)
    }
  }
}

// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));

//abaikan code dibawah ini
module.exports = toRoman