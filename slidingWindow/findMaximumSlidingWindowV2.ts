export function findMaxSlidingWindow(nums: Array<number>, w: number): Array<number> {
    let window: Array<number> = [];
    let maxArray: Array<number> =[];

    if(nums.length == 0){
        return maxArray;
    }

    if(w > nums.length){
        w = nums.length;
    }

    for(let i = 0; i < w; i++){
        while(window.length && nums[i] >= nums[window[window.length-1]]){
            window.pop();
        }
        window.push(i);
    }
    maxArray.push(nums[window[0]]);

    for(let i = w; i < nums.length; i++){
        if(window.length && i >= window.length){
            window.shift();
        }
        while(window.length && nums[i] >= nums[window[window.length - 1]]){
            window.pop();
        }
        window.push(i)
        maxArray.push(nums[window[0]]);
    }
    return maxArray;
}
