import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserServiceService,
              private location: Location) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
      //email: ['', Validators.required, Validators.email]
    })
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }else{
      this.userService.createUser(this.addForm.value)
      .subscribe(data => {
      this.router.navigate(['users']);
    })
    this.router.navigate(['users']);
    }
  }
  goBack(): void {
    this.location.back();
  }


}
