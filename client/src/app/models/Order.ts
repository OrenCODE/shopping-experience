export interface Order {
  userId: String,
  cartId: String,
  totalPrice: Number,
  city: String,
  street: String,
  orderDate: Date,
  deliveryDate: Date,
  creditCard: Number
}
