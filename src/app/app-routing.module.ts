import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {ListAddressComponent} from "./compoonents/list-address/list-address.component";
import {EditAddressComponent} from "./compoonents/edit-address/edit-address.component";
import {LoginComponent} from "./compoonents/login/login.component";
import {PageNotFoundComponent} from "./compoonents/partials/page-not-found/page-not-found.component";
import {AddAddressComponent} from "./compoonents/add-address/add-address.component";

const routes: Routes = [
  {path:"",redirectTo:'/address',pathMatch:'full'},
  {path:"address",children:[
      {path:"",component:ListAddressComponent},
      {path:"create",component:AddAddressComponent},
      {path:"edit/:id",component:EditAddressComponent},
    ]
  },
  {path:"login",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
