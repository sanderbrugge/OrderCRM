import data from "./data.json";
import { Order } from "./order";

/**
 * Fake api call that takes a second to complete, returns a promise containing the order data.
 */
export function fetchOrders(): Promise<Order[]> {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}
