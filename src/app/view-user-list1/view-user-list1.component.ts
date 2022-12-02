import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-user-list1',
  templateUrl: './view-user-list1.component.html',
  styleUrls: ['./view-user-list1.component.css']
})
export class ViewUserList1Component implements OnInit{
userId:any;
userdetails:any;

constructor(private activatedroute:ActivatedRoute,private apiservice:ApiService){}
ngOnInit(): void {
  this.activatedroute.params.subscribe(result=>{
    //console.log(result['id']);
    this.userId = result['id']    
  })
     this.apiservice.viewusersdata(this.userId)
     .subscribe((result:any)=>{
      // console.log(result);
       this.userdetails=result
    
   })
}
}
