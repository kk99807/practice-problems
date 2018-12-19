import { do_math } from './do_math';

describe('Do Math', () => {
  test('handles valid input', () => {
    expect(do_math(12,13,'+')).toEqual(25);
    expect(do_math(100,1,'-')).toEqual(99);
    expect(do_math(2,5,'*')).toEqual(10);
    expect(do_math(4,2,'/')).toEqual(2);
  });
  test('handles x and X for multiplication', () => {
    expect(do_math(9,3,'x')).toEqual(27);
    expect(do_math(4,3,'X')).toEqual(12);
  });
  test('handles division by zero', () => {
    function divideByZero() {
        do_math(5,0,'/');
    }
    expect(divideByZero).toThrowError(/zero/);
  });
  test('handles invalid operator', () => {
    function invalidOperator() {
        do_math(5,0,'|');
    }
    expect(invalidOperator).toThrowError(/operator/);
  });
});
