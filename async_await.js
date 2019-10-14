// Here I am just showing the .then in promise and async/await difference.
// By looking at the following examples you can see how code can be saved using async/await
const random  = () =>  {
    return Promise.resolve(Math.floor(100 * Math.random()));
};

const sumOfRAsynncNum = () => {
    let first;
    let second;
    let third;
    return random()
    .then(v=> {
        first = v;
        return random()
    }).then(v=> {
        second = v;
        return random()
    }).then(v=> {
        third = v;
        console.log(first, second,third)
        return null
    })
}
console.log(sumOfRAsynncNum());

const sumOfAsync = async () => {
 const first = await random();
 const second = await random();
 const third = await random();
 console.log("ASYNC", first, second, third)
 return null
}
console.log(sumOfAsync())