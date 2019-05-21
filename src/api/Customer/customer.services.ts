import data from "./customers.json";
import { Customer } from "./customer";

/**
 * Fetch all of the customers.
 */
export function fetchCustomers(): Promise<Customer[]> {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

/**
 * retrieve a single customer by ID.
 * @param id the customer's ID to retrieve
 */
export function getCustomerById(id: string): Promise<Customer> {
  const customer = data.find((customer: Customer) => customer.id === id);
  return new Promise(resolve => setTimeout(() => resolve(customer), 1000));
}
