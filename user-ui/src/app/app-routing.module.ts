import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUserComponent } from './userModule/components/search-user/search-user.component';
import { EditUserComponent } from './userModule/components/edit-user/edit-user.component';
import { AddUserComponent } from './userModule/components/add-user/add-user.component';

const routes: Routes = [
  {path: 'users', component: SearchUserComponent},
  {path: 'user/add', component: AddUserComponent},
  {path: 'user/edit', component: EditUserComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
