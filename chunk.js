function chunkUsingLoop(array, num) {
  // using just FOR LOOP not using the available methods like splice split etc
  const res = [];
  //[[1,2,3],[4]]
  for (var i = 0; i < array.length; i++) {
    var last = res[res.length - 1];
    //[1,2,3]
    //undef
    if (!last || last.length == num) {
      res.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  console.log(res);
  return null;
}
chunkUsingLoop([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

function chunkUsingSlice(array, num) {
  // using the METHOD slice
  // slice does not change the existing arrar it creates a new array
  const res = [];
  var i = 0;
  var n = array.length;
  while (i < n) {
    res.push(array.slice(i, (i += num)));
  }

  console.log(res);
  return null;
}

chunkUsingSlice([1, 2, 3, 4, 5, 6, 7, 8], 2);
