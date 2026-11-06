/**
 * Returns the order total in cents after a percentage discount and tax.
 * Discounts apply before tax. Amounts are rounded to the nearest cent.
 */
export function orderTotal(subtotalCents, discountPercent, taxRatePercent) {
  if (!Number.isInteger(subtotalCents) || subtotalCents < 0) {
    throw new RangeError('subtotalCents must be a non-negative integer');
  }
  const discounted = subtotalCents - subtotalCents * discountPercent;
  const taxed = discounted + discounted * (taxRatePercent / 100);
  return Math.round(taxed);
}
