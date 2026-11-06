/** Shipping cost in cents. Free at or above the threshold; express adds a flat fee. */
export const FREE_SHIPPING_THRESHOLD_CENTS = 5000;
export const STANDARD_CENTS = 695;
export const EXPRESS_FEE_CENTS = 1500;

export function shippingCost(subtotalCents, { express = false, country = 'US' } = {}) {
  if (!Number.isInteger(subtotalCents) || subtotalCents < 0) throw new RangeError('invalid subtotal');
  if (country !== 'US') throw new Error('Only US shipping is supported');
  const base = subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : STANDARD_CENTS;
  return express ? base + EXPRESS_FEE_CENTS : base;
}
