function mergeSort(arr1, arr2){
    let p1= 0;
    let p2 = 0;
    let res = [];
    console.log(`Given arrays ${arr1} and ${arr2}`)
    while(arr1.length > p1 && arr2.length > p2){
        if(arr1[p1] > arr2[p2]){
            res.push(arr2[p2])
            p2++
        } else{
            res.push(arr1[p1])
            p1++
        }
    }
    while(arr1.length > p1){
        res.push(arr1[p1])
        p1++
    }
    while(arr2.length > p2){
        res.push(arr2[p2])
        p2++
    }
    console.log("merged sort is ",res)
    return res
}
mergeSort([1,5,7,09,22,30],[2,3,4,6,32,43])