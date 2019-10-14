
const categories = [
    { name: 'tech', parent: null },
    { name: 'hot_right_now', parent: 'tech' },
    { name: 'upcomming_releases', parent: 'tech' },
    { name: 'gadgets', parent: 'tech' },
    { name: 'news', parent: null },
    { name: 'social', parent: 'startups' },
    { name: 'europe', parent: 'news' },
    { name: 'asia', parent: 'news' },
    { name: 'events', parent: 'news' },
    { name: 'startups', parent: null },
    { name: 'funding', parent: 'startups' },
    { name: 'unicorns', parent: 'startups' },
    { name: 'venture_capital', parent: 'funding' },
    { name: 'crowdfunding', parent: 'funding' },
    { name: 'usa', parent: 'news' }
  ];

  // recursion using an Array 
  const getPath = (categories, name) => {
      let path = [];
      const node = categories.find(x => x.name === name);
      if (!node) {
          return path;
      }
      path = [name, ...getPath(categories, node.parent)];
      return path;
  }
  console.log(getPath(categories, 'crowdfunding'));

// recursion using an Objects 
  const arrangeCategories = (categories, parent = null) => {
    let result = {}
    categories
      .filter(category => category.parent === parent)
      .forEach(category => {
        result[category.name] = arrangeCategories(categories, category.name)
      })
    //   console.log("result",result)
  
    return result
  };

console.log("Arranges ",arrangeCategories(categories, null))

// [[1,2,3],[3,4,5],[6,7,8]]

// function addNestedArray(arr) {
//   let result = [];
//   arr.forEach(x => {
//     if(Array.isArray(x))
//        result.push(addNestedArray(x))
//        else {
//          result.push(x)
//        }
//   })
//   return result.reduce((c,d)=> c+d)
// }

// console.log("Recursive",addNestedArray([[1,2,3],[3,4,5],[6,7,8]]))

function addNestedArray(arr) {
  let result = 0;
  for(var i=0; i< arr.length; i++){
       result += arr[i].reduce((a,b)=> a+b)
  }
  return result
}
console.log("Iteration", addNestedArray([[1,2,3],[3,4,5],[6,7,8]]))