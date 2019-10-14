// function swap(array, i, j){
//     let temp = array[i];
//     array[i]= array[j];
//     array[j] = temp
//     return array
// }

// function bubbleSort(array){
//     console.log("Given array is " + array )
//     for(var i =0;i <array.length; i++){
//         for(var j = 0; j < array.length -i; j++){
//             if(array[j] > array[j+1] ){
//                 swap(array,j, j+1)
//             }
//         }
//     }
//     console.log(array)
//     return array
// }
// bubbleSort([7,5,3,1,6,4,2]);
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

function bSort(array) {
  console.log(`Given array ${array}`);
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
    console.log("Inside for loop", array);
  }
  console.log("sorted", array);
  return array;
}
bSort([7, 4, 5, 2, 3, 1]);
