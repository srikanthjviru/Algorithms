var a = [1,2,3];

const result =  a.filter(x => x % 2 ===1);
const final = result.reduce((b,c) => b+c , 0);
console.log("result", result)
console.log("final",final)