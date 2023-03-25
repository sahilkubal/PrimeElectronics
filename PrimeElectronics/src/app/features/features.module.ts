import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersComponent } from './banners/banners.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        BannersComponent,
        ProductsComponent,
        ProductDetailsComponent,
        LoginComponent,
        RegistrationComponent,
        PagenotfoundComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule,
    ]
})
export class FeaturesModule { }
