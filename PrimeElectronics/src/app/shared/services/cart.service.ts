import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []

  // behaviorSubject act an a observable and it emits data
  public productList = new BehaviorSubject<any>([])

  constructor() { }

  // getting data
  getProducts() {
    return this.productList.asObservable();
  }

  // setting data takes product
  // also emits the data by using productList
  setProduct(product: any) {
    this.cartItemList.push(...product)
    this.productList.next(product)
  }

  // added products in cartlist and emits the cartlist whereve it is subscribe
  add_To_Cart(product: any) {
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice()
    console.log(this.cartItemList)
  }

  // total price of cart items
  getTotalPrice(): number{
    let grandTotal = 0
    this.cartItemList.map((p: any) => {
      grandTotal += p.total
    })
    return grandTotal
  }

  // Remove the item from the cart
  removeCartItem(product: any) {
    this.cartItemList.map((p: any, index: number) => {
      if (product.id === p.id) {
        this.cartItemList.splice(index, 1)
      }
    })
  }
}
