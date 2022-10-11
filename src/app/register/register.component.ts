import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    accono:['',[Validators.required,Validators.pattern('[0-9]+')]],
    passwrd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@#$]+')]]
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
    var uname=this.registerForm.value.uname
    var accono=this.registerForm.value.accono
    var passwrd=this.registerForm.value.passwrd
    const result=this.ds.register(accono,uname,passwrd)
  if(this.registerForm.valid)
  {
    if(result)
    {
      alert('Registered Successfully')
      this.router.navigateByUrl('')

    }  
    else
    {
      alert('User already exist')
    }
  }
    else
    {
      alert('Form Invalid')
    }

    // let userDetails=this.ds.userDetails

    // alert('registered')
  }

}
