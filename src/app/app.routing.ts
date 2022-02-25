//import modules
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import components that will have an exclusive page
import {LogInFormComponent} from './Components/log-in-form/log-in-form.component';
import {RegisterComponent} from './Components/register/register.component';
import {ProductsComponent} from './Components/products/products.component';
import {HomeComponent} from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { AccountComponent } from './Components/account/account.component';
import { RegistrationSuccessfullComponent } from './Components/registration-successfull/registration-successfull.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import {AuthGuardService} from './helpers/auth-guard.service'
import { CartComponent } from './Components/cart/cart.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { SelectAddressComponent } from './Components/select-address/select-address.component';
import { EnterCardInformationComponent } from './Components/enter-card-information/enter-card-information.component';
import { RecieptComponent } from './Components/reciept/reciept.component';


//routes array

const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:wordToSearch', component: ProductsComponent},
    {path : 'login', component: LogInFormComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account', component: AccountComponent, canActivate: [AuthGuardService]},
    {path: 'registrationSuccessful', component: RegistrationSuccessfullComponent},
    {path: 'productDetails/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent, canActivate: [AuthGuardService]},
    {path: 'selectAddress', component: SelectAddressComponent, canActivate: [AuthGuardService]},
    {path: 'favourites', component: FavouritesComponent, canActivate: [AuthGuardService]},
    {path: 'selectAddress', component: SelectAddressComponent, canActivate: [AuthGuardService]},
    {path: 'reciept', component: RecieptComponent, canActivate: [AuthGuardService]},
    {path: 'payment', component: EnterCardInformationComponent, canActivate: [AuthGuardService]},
    {path: '**', component: ErrorComponent}
    

]

//export routes modules
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);