import data from "./products.json";
import { Product } from "./product.js";

/**
 * Fetch all of the products.
 */
export function fetchProducts(): Promise<Product[]> {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

/**
 * retrieve a single product by ID.
 * @param id the product's ID to retrieve
 */
export function getProductById(id: string): Promise<Product> {
  const product = data.find((product: Product) => product.id === id);
  return new Promise(resolve => setTimeout(() => resolve(product), 1000));
}
