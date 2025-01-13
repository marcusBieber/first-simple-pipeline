import assert from 'assert';
import { add, substract, multiply } from './calculator.js';

{
    const result = add(1, 2);
    assert.strictEqual(result, 3);
}

{
    const result = substract(2, 1);
    assert.strictEqual(result, 1);
}

{
    const result = multiply(2, 3);
    assert.strictEqual(result, 6);
}