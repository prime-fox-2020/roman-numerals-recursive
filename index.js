function toRoman(num) {
    var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romawi = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var result = "";

    if (num < 0 || num >= 3000) {
        return "Angkanya 1-3000 aja :)";
    } else {
        for (let a = 0; a < angka.length; a++) {
            if (num >= angka[a]) {
                result += romawi[a];
                return result + toRoman(num - angka[a]);
            }
        }
        return result;
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
console.log("3001  | Nope     | ", toRoman(3001));

//abaikan code dibawah ini
module.exports = toRoman
