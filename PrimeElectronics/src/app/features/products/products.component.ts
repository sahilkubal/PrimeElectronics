import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private product_service: ProductService,
    private cart_service: CartService
  ) { }

  products: ProductInterface[] = []

  ngOnInit(): void {
    this.product_service.getProducts().subscribe(data => {
      this.products = data
      this.products.forEach((p: any) => {
        Object.assign(p,{quantity:1,total:p.price})
      })
    })

    if (this.products.length % 8 != 0) {
      this.page_number = Math.ceil(this.products.length / this.per_page)
    } else {
      this.page_number = Math.floor(this.products.length / this.per_page)
    }
  }

  filteredProducts = this.products
  per_page = 8
  start = 0
  end = 8
  page_number = 0

  // counter to create array of numbers for pagination
  counter(i: number):any {
    console.log(i);
    return new Array(i);
  }

  change_page(page_number: number) {
    this.end = this.per_page * page_number
    this.start = this.end - 8
  }

  addToCart(product: any) {
    // this.product_service.add_to_cart(product)
    this.cart_service.add_To_Cart(product)
  }
}
