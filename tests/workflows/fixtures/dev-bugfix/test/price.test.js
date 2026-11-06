import assert from 'node:assert/strict';
import { test } from 'node:test';
import { orderTotal } from '../src/price.js';

test('applies no discount and no tax', () => {
  assert.equal(orderTotal(10000, 0, 0), 10000);
});

test('applies a 10 percent discount before 8 percent tax', () => {
  assert.equal(orderTotal(10000, 10, 8), 9720);
});

test('rejects a negative subtotal', () => {
  assert.throws(() => orderTotal(-1, 0, 0), RangeError);
});
