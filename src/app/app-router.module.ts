import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MyAccountComponent} from "./my-account/my-account.component";

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
  }

]

@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRouterModule{

}
