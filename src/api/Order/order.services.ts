import data from "./orders.json";
import { Order } from "./order";

export const APIError = {
  status: "500",
  message: "An error has occured"
};

/**
 * Fake api call that takes a second to complete, returns a promise containing the order data.
 * Uncomment the rejected promise to see the error handling in action.
 *
 * Fetch all of the orders.
 */
export function fetchOrders(): Promise<Order[]> {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
  // return new Promise((_, reject) => setTimeout(() => reject(APIError), 1000));
}

/**
 * I'm assuming here that all changes to the order (adding/deleting products)
 * are reflected on the server, so we can place the order by passing the ID of the order
 * instead of the complete order.
 *
 * @param orderId the order to complete
 */
export function placeOrder(orderId: string) {
  return new Promise(resolve => setTimeout(() => resolve(), 1000));
  // return new Promise((_, reject) => setTimeout(() => reject(APIError), 1000));
}
