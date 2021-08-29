import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private getAllUsersUrl ="https://backend-people-crud-app.herokuapp.com/users";
private deleteUserUrl = "https://backend-people-crud-app.herokuapp.com/users/";
private addUserUrl = "https://backend-people-crud-app.herokuapp.com/users/add";

  constructor(private http:HttpClient) {  }


  getAllUsers(){
   return this.http.get<any>(this.getAllUsersUrl);
  }
  deleteUser(id:String){
    return this.http.delete<any>(this.deleteUserUrl+id)
  }

  addUser(user:User){
    return this.http.post<any>(this.addUserUrl,user);
  }


}
