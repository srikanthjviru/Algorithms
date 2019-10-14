// output the numbers for typed 'n'
// multiples of 3 as "fizz"
// multiples of 5 as "buzz"
// multiples of 3 and 5 as fizzbuzz
// below mentioned are 2 methods using i) elseif ii) only if
function fizbuz(n) {
  for (var i = 0; i < n; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log("fizzbuzz");
      } else {
        console.log("fizz");
      }
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizbuz(31);
