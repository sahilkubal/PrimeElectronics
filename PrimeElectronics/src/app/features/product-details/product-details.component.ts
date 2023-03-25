import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInterface } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  constructor(
    private activated_route: ActivatedRoute,
    private product_service: ProductService,
    private cart_service: CartService,
    private router: Router
  ){}

  id:number = 1
  product!: ProductInterface

  ngOnInit(): void {
    this.id = +this.activated_route.snapshot.paramMap.get("id")!
    this.product_service.getProductByID(this.id).subscribe(
      prod => {this.product = prod},
      err => {this.router.navigate(['/products'])}
    )
  }

  addToCart(product: any) {
    // this.product_service.add_to_cart(product)
    this.cart_service.add_To_Cart(product)
  }
}
