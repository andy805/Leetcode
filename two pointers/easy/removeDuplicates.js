
/*
Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution have a space complexity of O(1).

Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

*/

export function removeDuplicates(arr) {
    if(arr.length === 0){
        return 0;
    }

    let nextNonDup = 1;
    let i = 0;
    while(i < arr.length){
        if(arr[nextNonDup - 1] !== arr[i]){
            arr[nextNonDup] = arr[i];
            nextNonDup++;
        }
        i++;
    }
    return nextNonDup;
}