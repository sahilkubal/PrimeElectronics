import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersComponent } from './features/banners/banners.component';
import { LoginComponent } from './features/login/login.component';
import { PagenotfoundComponent } from './features/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ProductsComponent } from './features/products/products.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CartComponent } from './shared/components/cart/cart.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path:"register", component: RegistrationComponent},
  { path: "products-details/:id", component: ProductDetailsComponent },
  { path: "products", component: ProductsComponent },
  { path: "cart", component: CartComponent },
  { path: "home", component: BannersComponent },
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
