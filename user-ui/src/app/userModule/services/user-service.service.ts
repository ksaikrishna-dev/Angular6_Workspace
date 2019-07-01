import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient) { }

  private baseURL ='http://localhost:2244/user'; 

  createUser(userModel: UserModel){
    return this.http.post(this.baseURL + '/saveUser', userModel);
  }

  updateUser(user: UserModel){
    return this.http.put(this.baseURL + '/updateUser/' + user.id, user);
    //return this.http.put(this.baseURL + '/updateUser', user);
  }

  getUserById(id: Number){
    return this.http.get<UserModel>(this.baseURL + '/getUserById/' + id);
  }
  
  getUsers(){
    return this.http.get<UserModel[]>(this.baseURL + '/getUserList');
  }

  deleteUeser(id: Number){
    return this.http.delete(this.baseURL + '/deleteUser/' + id );
  }

  


}
