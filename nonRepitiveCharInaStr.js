// function nonRCIS(string){
//     let array = string.split('');
//     let obj = {};
//     var answer = false;
//     var minIndex = array.length;
//     array.forEach((letter, index) => {
//         if(!obj[letter]){
//             obj[letter] = [letter, true]
//         } else if(obj[letter]){
//             obj[letter] = false
//         }
//     })
//     for(var key in obj){
//         if(obj[key]){
//             if(obj[key][0] < minIndex){
//                 answer = key;
//                 minIndex = obj[key][0]
//             }
//         }
//     }
//     console.log("object ", obj)
//     console.log("answer is ", minIndex)
//     return answer
// }
// nonRCIS("apapllesdaxasde")
