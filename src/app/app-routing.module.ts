import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserList11Component } from './add-user-list11/add-user-list11.component';
import { DeleteUserList11Component } from './delete-user-list11/delete-user-list11.component';
import { UpdateUserList11Component } from './update-user-list11/update-user-list11.component';
import { UsersList1Component } from './users-list1/users-list1.component';
import { ViewUserList1Component } from './view-user-list1/view-user-list1.component';

const routes: Routes = [
  {
    path:'',component:UsersList1Component
  },
  {
    path:'app-view-user-list1/:id',component:ViewUserList1Component
  },
  {
    path:'app-add-user-list11',component:AddUserList11Component
  },
  {
    path:'app-update-user-list11/:id',component:UpdateUserList11Component
  },
  {
    path:'app-delete-user-list11/:id',component:DeleteUserList11Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
