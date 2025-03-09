import { moveZeros } from '../src/moveZeros';

describe('moveZeros', () => {
    it('should move all zeros to the end of the array', () => {
        const input = [false,1,0,1,2,0,1,3,"a"];
        const expectedOutput = [false,1,1,2,1,3,"a",0,0];
        expect(moveZeros(input)).toEqual(expectedOutput);
    });

    it('should handle an array with no zeros', () => {
        const input = [1, 2, 3, 4];
        const expectedOutput = [1, 2, 3, 4];
        expect(moveZeros(input)).toEqual(expectedOutput);
    });

    it('should handle an array with all zeros', () => {
        const input = [0, 0, 0, 0];
        const expectedOutput = [0, 0, 0, 0];
        expect(moveZeros(input)).toEqual(expectedOutput);
    });

    it('should handle an empty array', () => {
        const input: number[] = [];
        const expectedOutput: number[] = [];
        expect(moveZeros(input)).toEqual(expectedOutput);
    });

    it('should handle an array with one element', () => {
        const input = [0];
        const expectedOutput = [0];
        expect(moveZeros(input)).toEqual(expectedOutput);
    });

    it('should handle an array with one non-zero element', () => {
        const input = [1];
        const expectedOutput = [1];
        expect(moveZeros(input)).toEqual(expectedOutput);
    });
});