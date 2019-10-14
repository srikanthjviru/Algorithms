// function pyramid(n){
//     for(var i= 1; i<= n; i++){
//         let pyramid = '';
//         for(var hash = i; hash >0; hash--){
//             pyramid += "#"
//         } 
//         for(var space = n-i; space > 0; space--){
//             pyramid += " "
//         }
//         console.log(pyramid)
//     }
// }
pyramid(7)

function pyramid() {
    var n = 5;
    var output="";
    for (var i = 0; i <n; i++) {
    var myspace = " ";   
    for(let s = 0; s <(n-i-1); s++) {
        myspace += " ";
    }
        for (var j = 1; j <= 2*i + 1; j++) {
            output+="*";

        }
        console.log(myspace+output);
        output="";
    }
}

function pyramid1(n){
    for(var i = 1; i<= n; i++){
        const padding = ' '.repeat(n-i); 
        const hashes = '#'.repeat(i*2 - 1);
         console.log(padding + hashes + padding)
        }
    }
    pyramid1(7)