import { minus } from './util';

test('Minus:', () => { 
    const value = minus(7,2);
    expect(value).toBe(5);
    // expect(minus(9,2)).toBe(7);
})