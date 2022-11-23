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
