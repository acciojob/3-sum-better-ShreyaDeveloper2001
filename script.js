function threeSum(arr, target) {
// write your code here
  // Sort the input array
  arr.sort((a, b) => a - b);

  // Initialize variables
  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    // Use two-pointer approach for the remaining elements
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum - target);

      if (diff < minDiff) {
        // Update closest sum and minDiff
        closestSum = sum;
        minDiff = diff;
      }

      if (sum < target) {
        // Move the left pointer to the right
        left++;
      } else {
        // Move the right pointer to the left
        right--;
      }
    }
  }

  return closestSum;
}


module.exports = threeSum;
