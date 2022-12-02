import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersList1Component } from './users-list1/users-list1.component';
import { ViewUserList1Component } from './view-user-list1/view-user-list1.component';
import { AddUserList11Component } from './add-user-list11/add-user-list11.component';
import { UpdateUserList11Component } from './update-user-list11/update-user-list11.component';
import { DeleteUserList11Component } from './delete-user-list11/delete-user-list11.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersList1Component,
    ViewUserList1Component,
    AddUserList11Component,
    UpdateUserList11Component,
    DeleteUserList11Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
