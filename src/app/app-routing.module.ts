import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router'
import {ListAddressComponent} from "./compoonents/list-address/list-address.component";
import {EditAddressComponent} from "./compoonents/edit-address/edit-address.component";
import {LoginComponent} from "./compoonents/login/login.component";
import {PageNotFoundComponent} from "./compoonents/partials/page-not-found/page-not-found.component";
import {AddAddressComponent} from "./compoonents/add-address/add-address.component";
import {AuthGuard} from "./guards/auth.guard";
import {AfterAuthGuard} from "./guards/after-auth.guard";

const routes: Routes = [
  {path:"",redirectTo:'/address',pathMatch:'full'},
  {path:"address",children:[
      {path:"",component:ListAddressComponent},
      {path:"create",component:AddAddressComponent},
      {path:"edit/:id",component:EditAddressComponent},
    ],canActivate:[AuthGuard]
  },
  {path:"login",component:LoginComponent,canActivate:[AfterAuthGuard]},
  {path:"**",component:PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
