import { removeKeys } from "./removeKey";





test('given random input', () => {
    const input = [3, 2, 3, 6, 3, 10, 9, 3];
    const key = 3;
    const result = 4;
    expect(removeKeys(input, key)).toEqual(result)
    
});
test('given random input test 2', () => {
    const arrInput = [2, 11, 2, 2, 1];
    const key = 2;
    const result = 2;
    expect(removeKeys(arrInput, key)).toEqual(result)
    
});
test('given empty array', () => {
    const arrInput = [];
    const key = 2;
    const result = 0;
    expect(removeKeys(arrInput, key)).toEqual(result)
});
test('given a key thats not in the array', () => {
    const arrInput = [2, 11, 2, 2, 1];
    const key = 4;
    const result = 5;
    expect(removeKeys(arrInput, key)).toEqual(result)
});

test('given an array that only consists of the key', () => {
    const arrInput = [1, 1, 1];
    const key = 1;
    const result = 0;
    expect(removeKeys(arrInput, key)).toEqual(result)
});
