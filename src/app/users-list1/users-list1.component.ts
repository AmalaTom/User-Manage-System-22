import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users-list1',
  templateUrl: './users-list1.component.html',
  styleUrls: ['./users-list1.component.css']
})
export class UsersList1Component implements OnInit {
  usermanage ="LIST OF USERS"
  userlist:any
  
  constructor(private apiService:ApiService,private router:Router){

  }
  ngOnInit():void
  {
    this.apiService.getusersdata()
    .subscribe((result:any)=>{
     // console.log(result);
      // let users = JSON.parse("result")
      // console.log(users);     
       this.userlist = result.users
      // console.log(this.userlist);

      })
     

  }
  


}

