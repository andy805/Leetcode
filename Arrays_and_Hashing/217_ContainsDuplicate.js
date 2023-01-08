/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    let hashTable = {};
    console.log(`size what is this ${nums.length}`);
    for(let i = 0; i < nums.length; i++){
        if(!(nums[i] in hashTable)) {
            console.log(i);
            hashTable[nums[i]] = 1;
        }
        else {
            return true;
        }
    }
    return false;
    
};

// i can sort nlog(n) and loop through array looking for a duplicate. does current match next? and keep going
//or hash table wherde you add the value to table and if you get a hit check it matches then boom


containsDuplicate([1,2,3,1]);