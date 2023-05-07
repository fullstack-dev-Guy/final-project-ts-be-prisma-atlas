export interface Product1 {
  productname: string
  productprice: string
  productcategory: string
  imageToProduct: string
  productDescription: string
  quantity: string
  createdAt: string
  updatedAt: string
  id: string | string
}

export type Cart = {
  id: string
  products: string[]
  role: Role
  createdAt: string
  updatedAt: string
  userID: string
  ses: string
  email: string
  orderNumber: string
  date: string
}

export type CartArchives = {
  id: string
  products: string[]
  cart: string
  role: Role
  createdAt: string
  updatedAt: string
  userID: string
  ses: string
  email: string
  orderNumber: string
  date: string
  itemquantity: string
  paymentamount: string
}

export type UserCreateManyArgs = {
  data: Enumerable<UserCreateManyInput>
  skipDuplicates?: boolean
}

export interface IUser {
  id: string
  email: string
  displayName: string
  hash: string
  createdAt: string
  updatedAt: string
  role: Role
  orders: string[]
  firebaseUserID: string
}

export interface Order {
  firstname: string
  lastname: string
  phonenumber: string
  email: string
  itemquantity: number
  paymentamount: string
  date: string
  otherrequest: string
  orderstatus: string
  id: string
  role: string
  cart: string
  address: string
  user: string
  createdAt: string
  updatedAt: string
  firebaseUserID: string
}

//declare module 'express-session' {
//  interface SessionData {
//    cart: Cart
//  }
//}
