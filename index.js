function toRoman(num) {
  var romans = [
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M']
  ];
  var rom = '', len = 0;
  if (num == 0) {
    return rom;
  }
  
  for (var i = 0; i < romans.length; i++) {
    if (num >= romans[i][0]) {
      rom = romans[i][1];
      len = romans[i][0];
    } else if (i>0 && i % 2 != 0 && romans[i][0] - romans[i-1][0] <= num) {
      rom = romans[i-1][1] + romans[i][1];
      len = romans[i][0] - romans[i-1][0];
    } else if (i>1 && i % 2 == 0 && romans[i][0] - romans[i-2][0] <= num) {
      rom = romans[i-2][1] + romans[i][1];
      len = romans[i][0] - romans[i-2][0];
    }
  }
  return rom + toRoman(num - len);
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