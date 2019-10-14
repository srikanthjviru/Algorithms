function stringPatternSearch(string, pattern){
    let count  = 0;
    for(var i=0; i< string.length; i++){
        for(var j= 0; j< pattern.length; j++){
            const patternChar = pattern[j];
            if(patternChar != string[i+j]){
                break;
            }
            if( j === pattern.length-1){
                count++
            }

        }
    }
    console.log("matching pattern exits "+ count + " times")
}

stringPatternSearch("amooolamoolamolloolool", "ool")