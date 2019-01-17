import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes:Routes  = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'myaccount',
    component:MyAccountComponent
  },
  {
    path:'myprofile',
    component:MyProfileComponent
  },
  {
    path:'book',
    component:BookListComponent

  },
  {
    path:'bookDetail/:id',
    component:BookDetailComponent
  },
  {
    path:'shoppingCart',
    component:ShoppingCartComponent
  }

]

@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRouterModule{

}
