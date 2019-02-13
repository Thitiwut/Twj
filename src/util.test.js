import { minus } from './util';

test('Minus:', () => { 
    const value = minus(7,2);
    expect(value).toBe(5);
})