import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserModel } from '../../models/user-model';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UserServiceService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe( data => {
      this.users = data;
    });
  }
    
  load() {
    location.reload()
  }

  addUser(): void{
    this.router.navigate(['user/add']);
  }

  deleteUser(user: UserModel): void{
    this.userService.deleteUeser(user.id)
    .subscribe( data => {
      this.users = this.users.filter( u => u !== user);
    })
    this.load();
  }

  editUser(user: UserModel): void{
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['user/edit']);
  }


}
