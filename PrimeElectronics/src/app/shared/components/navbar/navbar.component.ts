import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(
    private cart_service: CartService
  ) { }
  
  totalItem: number =1

  ngOnInit(): void {
    this.cart_service.getProducts().subscribe(data => {
      this.totalItem = data.length
    })
  }

}
