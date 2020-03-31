function toRoman(num) {
    var angkaRomawi = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    var nilaiRomawi = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    var romawi = ''
    while (num != 0) {
        for (i = angkaRomawi.length - 1; i >= 0; i--) {
            if (num >= angkaRomawi[i]) {
                romawi += nilaiRomawi[i]
                return romawi + toRoman((num -= angkaRomawi[i]))
            }
        }
    }
    return romawi;

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
