import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<ProductInterface[]>("http://localhost:8000/api/all_products")
  }

  getProductByID(id: number) {
    return this.http.get<ProductInterface>(`http://localhost:8000/api/product/${id}`)
  }

  cart: ProductInterface[] = [] 

  add_to_cart(proId: number) {
    this.getProductByID(proId).subscribe(data=>this.cart.push(data))
  }
}
