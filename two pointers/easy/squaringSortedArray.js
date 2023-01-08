/* Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
*/

export function squareSortedArray(arr){

    /* do some setup to get an array that we can write into */
    const resultArr = []
    for(let k = 0; k < arr.length; k++){
        resultArr.push(0);
    }

    let i = 0;
    let j = arr.length - 1;
    let indexForResult = j;
    while(i <= j){
        let leftVal = arr[i] * arr[i];
        let rightVal = arr[j] * arr[j];
        if(leftVal >= rightVal){
            resultArr[indexForResult] = leftVal;
            i++;
            indexForResult--;
        }
        else{
            resultArr[indexForResult] = rightVal;
            j--;
            indexForResult--;
        }
    }
    console.log(resultArr);
    return resultArr;
}