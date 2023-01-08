export function pair_with_target_sum(arr, sum) {

    let leftPtr = 0;
    let rightPtr = arr.length - 1;
    let currSum = 0;
    while(leftPtr < rightPtr){
        currSum = arr[leftPtr] + arr[rightPtr];
        console.log(currSum);
        if(currSum === sum) {
            return [leftPtr, rightPtr]
        }
        else if(currSum > sum){
            rightPtr--;
        }
        else{
            leftPtr++;
        }
    }
    return [];
}

