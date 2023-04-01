import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    NavbarComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ProductService, CartService, UserService],
  exports: [
    NavbarComponent,
    FooterComponent,
    CartComponent
  ]
})
export class SharedModule { }
