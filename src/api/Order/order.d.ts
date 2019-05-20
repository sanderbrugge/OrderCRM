export interface Item {
  "product-id": string;
  quantity: string;
  "unit-price": string;
  total: string;
}

export interface Order {
  id: string;
  "customer-id": string;
  items: Item[];
  total: string;
}
