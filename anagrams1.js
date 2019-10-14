// function anagrams(stringA, stringB){
//     const arrayA = stringA.toLowerCase().split('');
//     const arrayB = stringB.toLowerCase().split('');
//     var a = arrayA.sort()
//     var b = arrayB.sort()
//     console.log(a)
//     console.log(b   )
//     if(JSON.stringify(a)==JSON.stringify(b)){
//         console.log("anagrams")
//         return true
//     } else {
//         console.log("not anagram")
//         return false
//     }

// }
// anagrams("aws11","wAs11");
function anagrams1(stringA,stringB){
            if(stringA.length !== stringB.length){
                console.log("Cant compare and not anagram");
                return null
            } else{
                const s1= stringA.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "").split('').sort().join('');
                const s2= stringB.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "").split('').sort().join('');
                if (s1 === s2){
                    console.log("Entered are anagram strings")
                    return true
                }
            }
}
anagrams1("Was2@@", "aws2!!");