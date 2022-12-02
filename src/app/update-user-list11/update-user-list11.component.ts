import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-user-list11',
  templateUrl: './update-user-list11.component.html',
  styleUrls: ['./update-user-list11.component.css']
})
export class UpdateUserList11Component implements OnInit {
  userId:any;
  userDetails:any={};
  constructor(private activatedRoute:ActivatedRoute,private apiservice:ApiService){}
    ngOnInit(): void 
    {
      //get id of user
      this.activatedRoute.params.subscribe((result:any)=>{
       // console.log(result);
        this.userId = result.id
       // console.log(this.userId);
        
      })
      //featch user details using id
      this.apiservice.viewusersdata(this.userId)
      .subscribe((result)=>{
       // console.log(result);
        this.userDetails = result
        console.log(this.userDetails);
        
      })
    }
  

}
