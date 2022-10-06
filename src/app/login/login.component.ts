import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='Your perfect banking partner'
  acnt='Enter your Account number'

  acno=''
  passw=''

  // userDetails:any={
  //   1000:{acno:1000,username:"John",password:123,balance:200000},
  //   1001:{acno:1001,username:"Akhil",password:234,balance:100000},
  //   1002:{acno:1002,username:"Chrismon",password:345,balance:300000},
  //   1003:{acno:1003,username:"Alen",password:456,balance:600000},
 
  // }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  login()
  {
    var acnum=this.acno
    var psw=this.passw

    const result=this.ds.login(acnum,psw)
    if(result)
    {
      alert('Login Success')
      this.router.navigateByUrl('dashboard')
    }

    // let udetails=this.userDetails
    // if(acnum in udetails)
    // {
    //   if(psw==udetails[acnum]['password'])
    //   {
    //     alert('Login success')
    //     // redirection
    //     this.router.navigateByUrl('dashboard')

    //   }
    //   else{
    //     alert('Incorrect Password')
    //   }
    // }
    // else
    // {
    //   alert("username not exist or incorrect acc number")
    // }
    // // alert('Login clicked')
  }


  // login(a:any,p:any)
  // {

  //   console.log(a.value);
  //   console.log(p.value);
    
    
  //   var acnum=a.value
  //   var psw=p.value
  //   let udetails=this.userDetails
  //   if(acnum in udetails)
  //   {
  //     if(psw==udetails[acnum]['password'])
  //     {
  //       alert('Login success')
  //     }
  //     else{
  //       alert('Incorrect Password')
  //     }
  //   }
  //   else
  //   {
  //     alert("username not exist or incorrect acc number")
  //   }
  //   // alert('Login clicked')


  // }

  // acnoChange(event:any)
  // {
  //   this.acno=event.target.value
  //   console.log(this.acno);
  // }
  // passwChange(event:any)
  // {
  //   this.passw=event.target.value
  //   console.log(this.passw);
  // }

}
