function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(element => element < pivot);
    const middle = arr.filter(element => element === pivot);
    const right = arr.filter(element => element > pivot);
  
    return quicksort(left).concat(middle, quicksort(right));
  }
  
  // Example usage:
  const unsortedArray = [3,5,7,9,1,8,2];
  const sortedArray = quicksort(unsortedArray);
  console.log(sortedArray);
  