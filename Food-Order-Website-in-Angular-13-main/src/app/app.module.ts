import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginCComponent } from './login-c/login-c.component';
import { LoginMerchantComponent } from './login-merchant/login-merchant.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { TotalCategoryComponent } from './total-category/total-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { TotalFoodComponent } from './total-food/total-food.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginCComponent,
    LoginMerchantComponent,
    RegisterComponent,
    AdminComponent,
    UsersComponent,
    AddfoodComponent,
    TotalCategoryComponent,
    AddCategoryComponent,
    TotalFoodComponent,
    TotalOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
