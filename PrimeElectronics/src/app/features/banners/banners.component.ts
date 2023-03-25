import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit{

  constructor(
    private product_service: ProductService
  ) { }

  products: ProductInterface[] = []
  
  ngOnInit(): void {
    this.product_service.getProducts().subscribe(data => this.products = data)
  }

  // mobileDevices:ProductInterface[] = []
  // mobileDeviceFunc() {

  // }

}
