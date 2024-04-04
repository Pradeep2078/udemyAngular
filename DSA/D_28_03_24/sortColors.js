var sortColors = function (nums) {
    // first solution
    // let ones,twos,zeros;
    // ones = twos = zeros = 0;
    // for(let i = 0; i < nums.length;i++) {
    //     if(nums[i] == 0) 
    //         zeros++;
    //     else if(nums[i] == 1)
    //         ones++;
    //     else 
    //         twos++;
    // }
    // let i = 0;
    // while(zeros--) {
    //     nums[i] = 0;
    //     i++;
    // }
    // while(ones--) {
    //     nums[i] = 1;
    //     i++;
    // }
    // while(twos--) {
    //     nums[i] = 2;
    //     i++;
    // }

    //second solution
    let l, m, h;
    l =0, m = 0;
    h = nums.length - 1;
    while (m <= h) {
        if (nums[m] == 0) {
            var temp = nums[l];
            nums[l] = nums[m];
            nums[m] = temp;
            l++, m++;
        }
        else if (nums[m] == 1) {
            m++;
        }
        else {
            var temp = nums[l];
            nums[l] = nums[m];
            nums[m] = temp;
            h--;
        }
    }

    return nums
};

let arr = [2, 0, 2, 1, 1, 2, 0]
let resArr = sortColors(arr);
console.log("Resulted Array.............")
resArr.forEach(element => {
    console.log(element);
});