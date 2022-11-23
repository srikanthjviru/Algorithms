let swap = (arr, i, j) => {
	let temp = arr[j];
	arr[j] = arr[i];
	arr[i] = temp;
	return arr;
};
const selectionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let swapIdx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[swapIdx] > arr[j]) {
				swapIdx = j;
			}
		}
		arr = swap(arr, i, swapIdx);
	}
	console.log("sorted arr", arr);
	return arr;
};

selectionSort([43, 3, 454, 5, 343, 6]);
selectionSort(["cat", "bat", "eat", "fight", "cool", "crawll"]);

//  ------- ----- ------ Insertion sort ----- ----- ---------- // 

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
};
let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(['sihd','ereetert','yyytyrt','apple','caee','grrraet!!!'])
insertionSort(inputArr);
console.log(inputArr);

