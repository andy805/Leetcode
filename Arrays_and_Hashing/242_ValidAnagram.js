/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

    let hashmap = {};
    for(let i  = 0; i < s.length; i++) {
        if(!(s[i] in hashmap)){
            hashmap[s[i]] = 0;
        }
        hashmap[s[i]]++;
    console.log(`in the first for loop: ${Object.keys(hashmap).length}`)
    }

    for(let j = 0; j < t.length; j++){
        console.log(`this is 2nd, this is ${t[j]}`)
        if(t[j] in hashmap) {
        console.log(`this is 2nd if, this is ${t[j]}`)
            hashmap[t[j]]--;
            if(hashmap[t[j]] == 0){
                delete hashmap[t[j]];
            }
        }
        else {
            return false;
        }
    }

    console.log(`keys is ${Object.keys(hashmap).length}`)
    if(Object.keys(hashmap).length == 0) {
        console.log(`results are true`);
        return true
    }
        console.log(`results are false`);
    return false;
    
};


isAnagram('a', 'ab');