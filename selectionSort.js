/// selection sort works with the outer loop and inner loop
// we make a mark of the outer index  => here swapIdx = i 
// then we compare it with the inner loop variable j
// we look for comparision a[j] < a[swapIdx] and
//  if it pass meaning inner loop index is smaller

// we now start comparing against new swapIdx by changing it from i to j
function swap(array, i , j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
    return array
}

function selectionSort(array){
    for(var i = 0; i < array.length; i++){
        let swapIdx = i; 
        for(var j = i+1; j< array.length; j++){
            if(array[j] < array[swapIdx]){
                swapIdx = j
            }
        }
        swap(array, i, swapIdx)
    }
    console.log(array);
    return array
}

selectionSort([43,3,454,5,343,6])