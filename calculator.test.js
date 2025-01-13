import assert from 'assert';
import { add } from './calculator.js';

{
    const result = add(1, 2);
    assert.strictEqual(result, 3);
}