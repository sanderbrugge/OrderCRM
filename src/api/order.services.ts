import data from "./data.json";
import { Order } from "./order";

export function fetchOrders(): Order[] {
  return data;
}
