
/*
Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution have a space complexity of O(1).

Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

*/

export function removeDuplicates(arr) {

    if(arr.length == 0){
        return 0;
    }
    if(arr.length <= 1){
        return 1;
    }
    let searcherPtr = 1;
    let masterPtr = 0;
    let currMasterVal;
    let totalHits = 0;
    while(searcherPtr < arr.length){
        if(arr[masterPtr] == arr[searcherPtr]){
            if(currMasterVal == arr[searcherPtr]) {
                //this is the value we have encountered before. increment the searcher ptr
                searcherPtr++;
            }
            else {
                currMasterVal = arr[searcherPtr];
                masterPtr++;
                searcherPtr++;
                totalHits++;
            }
        }
        else {
            if(currMasterVal == arr[searcherPtr]) {
                //keep incremeting search but keep master the same
                searcherPtr++;
            }
            else {
                currMasterVal = arr[masterPtr];
                arr[masterPtr] = arr[searcherPtr];
                masterPtr++;
                searcherPtr++;
                totalHits++;
            }
        }
    }
    return totalHits;
}