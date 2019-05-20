import data from "./orders.json";
import { Order } from "./order";

const APIError = {
  status: "500",
  message: "An error has occured"
};

/**
 * Fake api call that takes a second to complete, returns a promise containing the order data.
 * Uncomment the rejected promise to see the error handling in action.
 */
export function fetchOrders(): Promise<Order[]> {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
  // return new Promise((_, reject) => setTimeout(() => reject(APIError), 1000));
}
