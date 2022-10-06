import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  accono=""
  passwrd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register()
  {
    var uname=this.uname
    var accono=this.accono
    var passwrd=this.passwrd
    const result=this.ds.register(accono,uname,passwrd)
    if(result)
    {
      alert('Registered Successfully')
      this.router.navigateByUrl('')

    }
    else
    {
      alert('User already exist')
    }

    // let userDetails=this.ds.userDetails

    // alert('registered')
  }

}
