export interface Cart {
  userId: String;
  date: Date;
  isOpen: Boolean;
  products: [{
    _id: String;
    name: String;
    price: Number;
    image: String;
  }]
}
