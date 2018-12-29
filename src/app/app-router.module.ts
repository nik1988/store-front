import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {BookListComponent} from "./book-list/book-list.component";

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

  }

]

@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRouterModule{

}
