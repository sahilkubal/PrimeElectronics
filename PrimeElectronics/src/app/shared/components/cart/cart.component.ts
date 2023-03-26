import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(
    private product_service: ProductService,
    private cart_service: CartService
  ) { }

  
  cartProducts: any = []
  grandTotal!: number
  
  ngOnInit(): void {
    this.cart_service.getProducts().subscribe(data => {
      this.cartProducts = data;
      this.grandTotal = this.cart_service.getTotalPrice()
    })
  }

  removeCartItem(product: any) {
    this.cart_service.removeCartItem(product)
  }
}
