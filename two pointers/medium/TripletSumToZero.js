/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero
*/

export function tripletSumToZero(arr){
    const tripletArray = []
    arr.sort();
    for(let i = 0; i < arr.length - 2; i++){
        if(i > 0 && arr[i] === arr[i - 1]){
            //found a duplicate do nothing
        }
        else {
            pair_with_target_sum(arr, i + 1, -arr[i], tripletArray);
        }
    }
    return tripletArray;
}

function pair_with_target_sum(arr, startingIndex, targetSum, tripletArray){
    let rightIndex = arr.length - 1;
    while( startingIndex < rightIndex){
        let currSum = arr[startingIndex] + arr[rightIndex];
        if(targetSum > (currSum)){
            startingIndex++;
        }
        else if(targetSum < currSum){
            rightIndex--;;
        }
        else{
            //we have found our target sum so the pair belongs to the triplet to sum to zero
            tripletArray.push([-targetSum, arr[startingIndex], arr[rightIndex]]);
            startingIndex++;
            rightIndex--;
        }
    }

}