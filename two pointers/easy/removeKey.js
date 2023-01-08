/* Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
*/

export function removeKeys(arr, key){
    let placeHolder = 0;
    let i = 0;
    while(i < arr.length){
        if(arr[i] !== key){
            arr[placeHolder] = arr[i];
            placeHolder++;
        }
        i++;
    }


    return placeHolder;
}