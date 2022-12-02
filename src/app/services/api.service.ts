import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
   
  constructor(private api:HttpClient) { }

  //api caii-for user list
  getusersdata()
  {
   //HttpClientModule Library
   
  return this.api.get('https://dummyjson.com/users') 
  }
  viewusersdata(userId:any)
  {
    return this.api.get('https://dummyjson.com/users/'+userId) 

  }
  //3.To add new User details
  addUser(newUser:any)
{
return this.api.post('https://dummyjson.com/users/',newUser)
}
}
