import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { UserModel } from '../../models/user-model';
import {first} from "rxjs/operators";
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private userService: UserServiceService,
              private location: Location) { }

  ngOnInit() {
    let userId = localStorage.getItem('editUserId');
    if(!userId){
      alert("Invalid action..!!")
      this.router.navigate(['users']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.userService.getUserById(+userId)
    .subscribe( data => {
      this.editForm.setValue(data);
    })
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }else{
    this.userService.updateUser(this.editForm.value)
    .pipe(first())  
    .subscribe( data => {
      this.router.navigate(['users']);
    },
    error => {
      alert(error);
    });
  }
  }

  goBack(): void {
    this.location.back();
  }


}
