function swap(array, i, j){
  console.log(`Given array ${array} and swaping ${i} with ${j}`)
  let temp = array[i];
  array[i]= array[j];
  array[j] = temp
  console.log(`swap is ${array} `)
  return array
}

swap([1,2,3,4,5,6,7,8], 2,4);