function toRoman(num) {

  var res = ''
  var kamus = [
      ["M",1000],
      ["DM",900],
      ["D",500],
      ["CD",400],
      ["C",100],
      ["LC",90],
      ["L",50],
      ["XL",40],
      ["X",10],
      ["IX",9],
      ["V",5],
      ["IV",4],
      ["I",1]
   ]

   if (num > 3000){
     return 'Angka Maksimal 3000'
   }
   if (num <= 0){
     return ''
   }

   else{
      for (i=0; i < kamus.length;i++){
        if(kamus[i][1] <= num){
          num -= kamus[i][1]
          res += kamus[i][0]
          return res + toRoman(num)
        }
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
