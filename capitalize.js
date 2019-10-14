// function capitalize(str){
//     var array = str.split(' ');
//     var a = []
//     for(var i = 0; i< array.length;i++){
//         const word = array[i];
//         a.push(word[0].toUpperCase() + word.slice(1).toLowerCase());    
//     }
//     console.log(a.join(' '))
//     return a.join(' ')
// }
// capitalize("i love cats coming to home")

// function capitalize(str){
//     var array = str.split(' ');
//     const a= [];
//     for(var i = 0; i< array.length ; i++){
//         const word = array[i];
//             console.log("WORD",word)
//         a.push(word[0].toUpperCase()+word.slice(1).toLowerCase())
//         console.log(a)
//     }
//     console.log(a.join(' '))
//     return null
// }

function capitalize(str){
    const words = str.split(' ');
    const final = [];
    for(var i=0; i< words.length; i++){
        const word = words[i];
        final.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    console.log(final.join(' '))
    return null
}

capitalize("i am a selfish guy and dont have guts")