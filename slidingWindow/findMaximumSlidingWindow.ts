
export function findMaxSlidingWindow(nums: Array<number>, w: number): Array<number> {

    let max: number = -1000; //really small negative number
    let arrayMaxes: Array<number> = [];
    let window: Array<number> = []; //this will hold the indexes of the window, where window[0] will always be the left most index of our window

    //do some easy checks
    if(nums.length <= 0){
        return [];
    }
    //override w if w is greater than the lenght of the array
    if(w > nums.length){
        w = nums.length;
    }

    //first step is build the first window and get the max from the first window
    for(let i = 0; i < w; i++){
        while(window.length && nums[i] > nums[window[window.length-1]]){
            window.pop(); //remov last element from array
        }
        window.push(i);
    }

    //we have iterated through our first window save results

    arrayMaxes.push(nums[window[0]]);

    //now we have to iterate throug the rest of the array
    for(let i = w; i < nums.length; i++){
        if(window.length && window[0] <= (i - w)){
            window.shift(); //remove the first element
        }
        //while the current element is greater than the last element in our window, we want to pop. our last element in our window is our smallest value but largest index
        while(window.length && nums[i] >= nums[window[window.length - 1]]){
            window.pop() //keep popping if our current value is greater than the last window element
        }
        window.push(nums[i]);
        arrayMaxes.push(nums[window[0]]);
    }

    // your code will replace this placeholder return statement
    return arrayMaxes;
}
