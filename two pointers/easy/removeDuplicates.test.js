const { removeDuplicates } = require("./removeDuplicates");


test('empty array given', () => {
    expect(removeDuplicates([])).toEqual(0)
});
test('given only one element', () => {
    expect(removeDuplicates([1])).toEqual(1)
});
test('given an array with actual values', () => {
    const arr = [2, 2, 2, 11];
    const result = 2;
    expect(removeDuplicates(arr)).toEqual(result)
});
test('given an array with actual values test 2', () => {
    const arr = [2, 3, 3, 3, 6, 9, 9];
    const result = 4;
    expect(removeDuplicates(arr)).toEqual(result)
});
test('given an array with actual values test 3', () => {
    const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3];
    const result = 3;
    expect(removeDuplicates(arr)).toEqual(result)
});