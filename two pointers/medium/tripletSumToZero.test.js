import { tripletSumToZero } from "./TripletSumToZero";
describe('test case 1', () => {
    const arr = [-3, 0, 1, 2, -1, 1, -2];
    const expectedResult = [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]];
    test('test case 1', () => {
        expect(tripletSumToZero(arr).length).toEqual(expectedResult.length)

    });
    
    for(let k = 0; k < expectedResult.length; k++){
        test(`test each sum array in the master array, this is ${k}`, () => {
            const result = tripletSumToZero(arr);
            for(let i = 0; i < result.length; i++){
                expect(expectedResult[i].length).toEqual(result[i].length);
                expect(expectedResult[i].sort()).toEqual(result[i].sort());
            }
        });
    }


});
describe('test case 2', () => {
    const arr = [-5, 2, -1, -2, 3];
    const expectedResult = [[-5, 2, 3], [-2, -1, 3]];
    test('test lengths', () => {
        expect(tripletSumToZero(arr).length).toEqual(expectedResult.length)

    });
    
    for(let k = 0; k < expectedResult.length; k++){
        test(`test each sum array in the master array, this is ${k}`, () => {
            const result = tripletSumToZero(arr);
            for(let i = 0; i < result.length; i++){
                expect(expectedResult[i].length).toEqual(result[i].length);
                expect(expectedResult[i].sort()).toEqual(result[i].sort());
            }
        });
    }
});
describe('test case 3', () => {
    const arr = [-2, 0, 2, -1, -1];
    const expectedResult = [[-2, 0, 2], [-1, -1, 2]];
    test('test lengths', () => {
        expect(tripletSumToZero(arr).length).toEqual(expectedResult.length)

    });
    
    for(let k = 0; k < expectedResult.length; k++){
        test(`test each sum array in the master array, this is ${k}`, () => {
            const result = tripletSumToZero(arr);
            for(let i = 0; i < result.length; i++){
                expect(expectedResult[i].length).toEqual(result[i].length);
                expect(expectedResult[i].sort()).toEqual(result[i].sort());
            }
        });
    }
})
