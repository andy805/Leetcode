import { squareSortedArray } from "./squaringSortedArray";





test('simple test 1', () => {
    const arr = [-2, -1, 0, 2, 3];
    const result = [0, 1, 4, 4, 9];

    expect(squareSortedArray(arr)).toEqual(result);
})

test('simple test 2', () => {
    const arr = [-3, -1, 0, 1, 2];
    const result = [0, 1, 1, 4, 9];

    expect(squareSortedArray(arr)).toEqual(result);
})

test('having all the same value', () => {
    const arr = [3, 3, 3, 3];
    const result = [9, 9, 9, 9];

    expect(squareSortedArray(arr)).toEqual(result);
})

test('kinda complext', () => {
    const arr = [-6, -5, -5, -5, -3, -2, -1, 0, 0, 0, 1, 1, 2, 2, 2, 6, 9, 9];
    const result = [0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 9, 25, 25, 25, 36, 36, 81, 81];
    expect(squareSortedArray(arr)).toEqual(result);
})