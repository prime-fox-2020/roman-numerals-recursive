function toRoman(num) {
    if(num > 3000) {
        return 'Input angka maksimal 3000';
    }
    var romanRole = [
        [1,'I'],
        [2, 'II'],
        [3,'III'],
        [4,'IV'],
        [5,'V'],
        [9, 'IX'],
        [10,'X'],
        [40, 'XL'],
        [50,'L'],
        [100,'C'],
        [400, 'CD'],
        [500,'D'],
        [1000,'M']
    ]

    for(var i = romanRole.length - 1; i >=0; i--) {
        if(num < 1) {
            return '';
        } else if (num >= romanRole[i][0]) {
            return romanRole[i][1] + toRoman(num - romanRole[i][0]);
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
