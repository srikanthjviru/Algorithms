
function steps(n){
    for(var i = 1; i<=n; i++){
        let step;
        for(var hash = i;hash > 0; hash--){
            step += '#'
        }
        for(var space = n-i; space > 0; space--){
            step += " "
        }
        console.log('steps', step)
    }
    return null
}

steps(9)