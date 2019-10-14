// a=[2,3,5,7,8,9,12,44,55,66], find the index of 55 in the array
//**NOTE: */ Binary Search will only work on the SORTED ARRAY
// left = 0; right =10 mid = 0+10/2 = 5 midChar=9 value=55
// so now compare the midChar against the given value 55
// so if its not equal then move the left position to the midChar
// position and continue the process

function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const midValue = array[mid];
    if (midValue === value) {
      console.log("index of " + value + " is " + mid);
      return mid;
    } else if (midValue < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(`Given value ${value} is not present`);
  return -1;
}

binarySearch([1, 3, 4, 5, 7, 10, 11, 12, 34, 55], 55);
