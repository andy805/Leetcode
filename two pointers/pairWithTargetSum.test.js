const { pair_with_target_sum } = require("./pairWithTargetSum");

test('[1, 2, 3, 4, 6] , 6  -- i should get [1, 3]', () => {
    const input = [1, 2, 3, 4, 6];
    const targetsum = 6
    expect(pair_with_target_sum(input, targetsum)).toEqual([1, 3]);
  });
test('[2, 5, 9, 11] , 11  -- i should get [0, 2]', () => {
    const input = [2, 5, 9, 11];
    const targetsum = 11
    expect(pair_with_target_sum(input, targetsum)).toEqual([0, 2]);
  });
test('[] , 11  -- i should get [], empty case', () => {
    const input = [];
    const targetsum = 11
    expect(pair_with_target_sum(input, targetsum)).toEqual([]);
  });

// console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));