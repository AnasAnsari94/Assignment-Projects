let nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
    let i = 0; 
  

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0) {

        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
  }
moveZeroes(nums);
console.log(nums); 

nums = [0];
moveZeroes(nums);
console.log(nums); 
