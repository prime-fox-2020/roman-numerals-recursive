function toRoman(num) {
    let arabicNum = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];
    let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    
    if(num > 3000) {
        return 'Angka maksimum 3000'
    } else if(num < 1) {
        return ''
    }
    
    for(let i = 0; i < arabicNum.length; i++) {
        while(num >= arabicNum[i]) {
            return romanNum[i] + toRoman(num - arabicNum[i])
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
console.log("9     | IX       | ", toRoman(3500));


//abaikan code dibawah ini
module.exports = toRoman
