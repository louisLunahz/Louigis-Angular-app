import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service'; 
import {navBar } from './Components/navBar/navBar.component';
import { AccountCardComponent } from './Components/account-card/account-card.component';
import { LogInFormComponent } from './Components/log-in-form/log-in-form.component';
import { ProductsComponent } from './Components/products/products.component';
import {HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { AccountComponent } from './Components/account/account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductService } from './services/Product.service';
import { RegistrationSuccessfullComponent } from './Components/registration-successfull/registration-successfull.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import {ErrorInterceptorService} from './interceptors/error-interceptor.service';
import { CartComponent } from './Components/cart/cart.component';
import { ItemComponent } from './Components/item/item.component';
import { ItemsComponent } from './Components/items/items.component';
import { TotalCardComponent } from './Components/total-card/total-card.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { AddressComponent } from './Components/address/address.component';
import { SelectAddressComponent } from './Components/select-address/select-address.component';
import { EnterCardInformationComponent } from './Components/enter-card-information/enter-card-information.component';
import { RecieptComponent } from './Components/reciept/reciept.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CSRFInterceptorInterceptor } from './interceptors/csrfinterceptor.interceptor';




@NgModule({
  declarations: [
    AppComponent, 
    navBar, 
    AccountCardComponent, 
    LogInFormComponent, 
    ProductsComponent, 
    RegisterComponent, 
    HomeComponent, 
    ErrorComponent, 
    AccountComponent, 
    RegistrationSuccessfullComponent, 
    ProductDetailsComponent, 
    CartComponent, ItemComponent, ItemsComponent, TotalCardComponent, FavouritesComponent, AddressComponent, SelectAddressComponent, EnterCardInformationComponent, RecieptComponent, CategoriesComponent
  ],
  imports: [
    HttpClientXsrfModule,
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    routing 
  ],
  providers: [
    CookieService,
    appRoutingProviders,
   ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:ErrorInterceptorService,
      multi:true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:CSRFInterceptorInterceptor,
      multi:true,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
