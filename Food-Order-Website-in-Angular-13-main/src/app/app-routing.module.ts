import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { AdminComponent } from './admin/admin.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginCComponent } from './login-c/login-c.component';
import { LoginMerchantComponent } from './login-merchant/login-merchant.component';
import { RegisterComponent } from './register/register.component';
import { TotalCategoryComponent } from './total-category/total-category.component';
import { TotalFoodComponent } from './total-food/total-food.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'loginCustomer',component:LoginCComponent},
  {path:'loginMerchant',component:LoginMerchantComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'users',component:UsersComponent},
  {path:'addfood', component:AddfoodComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'total-category', component:TotalCategoryComponent},
  {path:'total-food',component:TotalFoodComponent},
  {path:'total-order',component:TotalOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
