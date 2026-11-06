import assert from 'node:assert/strict';
import { test } from 'node:test';
import { shippingCost } from '../src/shipping.js';

test('works', () => {
  assert.ok(shippingCost(1000) > 0);
});

test('free shipping', () => {
  assert.equal(shippingCost(9000), 0);
});
