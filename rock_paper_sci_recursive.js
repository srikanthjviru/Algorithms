// input 2
// output ["rr","rp","rs","pr","pp","ps","sr","sp","ss"] 9

// input 1
// output ["r", "p","s"]

function rps(rounds){
    var result = [];
    var games = ["r","p","s"];
    var play = function(playedSoFar, rounds){
        if(rounds === 0 ){
            result.push(playedSoFar);
            return;
        }
        // now implementing the recursive function 
        // taking the base case as rounds === 0 as above
        for(var j = 0; j< games.length; j++){
            play(playedSoFar+games[j], rounds-1)
        }
    }
    // calling the function variable play from here
    // assuming the playedSoFar is empty and rounds is being passed
    play('', rounds)
    console.log(rounds + " rounds " + result + " possible games ", result.length)
    return result
}
rps(3)