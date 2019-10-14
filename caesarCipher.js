// this program is to shifting the characters by a given number
// so considering two factors here 
// i) if shifting number greater than 26
// ii) display the non alpha characters as it is.

function caeserCipher(string, shift){
    const alphaChar = "abcdefghijklmnopqrstuvwxyz".split('');
    let final = '';
    shift = shift % 26;
    for(var i = 0; i< string.length; i++){
        var char = string[i];
        const charIdx = alphaChar.indexOf(char);
        if(charIdx === -1){ 
            final += char;
            continue
        }
        const newChar = charIdx + shift;
        console.log(newChar)
         final += alphaChar[newChar]
    }
    console.log("shifting string of " +string + " by "+ shift +" is = " +final)
    return null 
}
caeserCipher("abc!@", 270) 
caeserCipher("apple", 2) 