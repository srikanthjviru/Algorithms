function maxCharInStr(str){
    var charObj = {};
    var maxCount = 0;
    for(var i =0; i< str.length; i++){
        var char = str[i];
        charObj[char] = charObj[char] + 1 || 1;
        if(charObj[char]> maxCount){
            maxCount = charObj[char];
            maxChar = char
        }
    }
    console.log(maxChar, maxCount, "times")
    return null
}
maxCharInStr("ANIAINA");