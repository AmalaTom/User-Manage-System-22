import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-user-list11',
  templateUrl: './add-user-list11.component.html',
  styleUrls: ['./add-user-list11.component.css']
})
export class AddUserList11Component implements OnInit {
  id:any;
  firstName:any;
  lastName:any;
  maidenName:any;
  age:any;
  gender:any;
  email:any;
  Phone:any;
  username:any;
  password:any;
  birthDate:any;
  image:any;
  bloodGroup:any;
  height:any;
  weight:any;
  eyeColor:any;
  haircolor:any;
  hairtype:any;
  domain:any;
  ip:any;
  address:any;
  city:any;
  lat:any;
  lng:any;
  postalcode:any;
  State:any;
  macAddress:any;
  university:any;
  cardExpire:any;
  cardNumber:any;
  cardType:any;
  currency:any;
  iban:any;
  caddress:any;
  ccity:any;
  clat:any;
  clng:any;
  cpostalCode:any;
  cstate:any;
  department:any;
  name:any;
  title:any;
  ein:any;
  ssn:any;
  userAgent:any;
  
constructor(private api:ApiService,private router:Router){}
ngOnInit():void{
}
addUser(){
  // console.log(this.firstName);
  let newUser ={
    id:this.id,
   firstName:this.firstName,
   lastName:this.lastName,
   maidenName:this.maidenName,
   age:this.age,
   gender:this.gender,
   email:this.email,
  phone:this.Phone,
   username:this.username,
  passwor:this.password,
  birthDate: this.birthDate,
   image:this.image,
   bloodGroup:this.bloodGroup,
   height:this.height,
   weight:this.weight,
   eyeColor:this.eyeColor,
   hair:{
    color:this.haircolor,
    type:this.hairtype
   },
   domain:this.domain,
   ip:this.ip,
   address:{
    address:this.address,
    city:this.city,
    coordinates:{
     lat:this.lat,
      lng:this.lng
    },
    postalCode:this.postalcode,
    state:this.State,
   },
   macAddress:this.macAddress,
   university:this.university,
   bank:{
    cardExpire:this.cardExpire,
    cardNumber:this.cardNumber,
    cardType:this.cardType,
    currency:this.currency,
    iban:this.iban
   },
   company:{
    address:{
      address:this.caddress,
      city:this.ccity,
      coordinates:{
        lat:this.clat,
        lng:this.clng
      },
      postalCode:this.cpostalCode,
      state:this.cstate
    },
    department:this.department,
    name:this.name,
    title:this.title
    },
    ein:this.ein,
    ssn:this.ssn,
    userAgent:this.userAgent
   }
   console.log(newUser);
   this.api.addUser(newUser)
.subscribe((newUser)=>{
  //console.log(result);
    alert('User added successfully')
    this.router.navigateByUrl('')

   })
  }
}

 
  //


