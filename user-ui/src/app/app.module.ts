import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './userModule/components/search-user/search-user.component';
import { EditUserComponent } from './userModule/components/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserServiceService } from './userModule/services/user-service.service';
import { AddUserComponent } from './userModule/components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
