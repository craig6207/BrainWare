export interface Order {
  id: number;
  description: string;
  orderTotal: number;
  orderProduct: OrderProduct[];
}

export interface OrderProduct {
  product: Product;
  quantity: number;
  price: number;
}

export interface Product {
  name: string;
  model: string;
  information: string;
}
