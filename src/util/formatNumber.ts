// Small format fn's to display consicse strings everywhere. Can be easily extended to, for example, include taxes or format the id's to something else, etc.

/**
 * @param price the price to format
 */
export const formatPrice = (price: number | string) => {
  if (typeof price === "number") {
    return `$ ${price.toFixed(2)}`;
  }

  const parsed = parseFloat(price);
  const displayPrice = isNaN(parsed) ? 0 : parsed;

  return `$ ${displayPrice.toFixed(2)}`;
};

/**
 * @param id the Id to format
 */
export const formatId = (id: string) => `# ${id}`;
