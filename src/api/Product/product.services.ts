import data from "./products.json";
import { Product } from "./product.js";

// Add a product cache, so we can store and retrieve fetched products, without needing to wait for the call to finish.
const productCache = new Map<string, Promise<Product>>();

/**
 * Fetch all of the products.
 */
export function fetchProducts(): Promise<Product[]> {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

/**
 * Retrieve a single product by ID.
 * Checks if the product has been previously retrieved and stored in cache.
 * @param id the product's ID to retrieve
 */
export function getProductById(id: string): Promise<Product> {
  if (productCache.has(id)) {
    return productCache.get(id) as Promise<Product>;
  }

  const product = data.find((product: Product) => product.id === id);
  const promise: Promise<Product> = new Promise(resolve =>
    setTimeout(() => resolve(product), 1000)
  );
  productCache.set(id, promise);
  return promise;
}
