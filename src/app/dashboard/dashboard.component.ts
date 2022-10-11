import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user=""

  acnum=""
  passwrd=""
  depos=""
  acnum1=""
  passwrd1=""
  withd=""

  accountnum:any

  constructor(private ds:DataService,private router:Router) { 

    this.user=this.ds.cuser
  }

  ngOnInit(): void {

    if(!localStorage.getItem('currentAcno'))
    {
      alert('Please login first')
      this.router.navigateByUrl('')
    }

  }
  deposite()
  {

    var acnum=this.acnum
    var passwrd=this.passwrd
    var depos=this.depos
    
    const result=this.ds.deposite(acnum,passwrd,depos)
    if(result){
      alert(`${depos}rs credited, new balance is ${result}rs` )
    }


  }
  withdraw()
  {
    var acnum1=this.acnum1
    var passwrd1=this.passwrd1
    var withd=this.withd
    const result1=this.ds.withdraw(acnum1,passwrd1,withd)
    if(result1){
      alert(`${withd}rs has been withdrawed, new balance is ${result1}rs` )
    }

  }
  logout()
  {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.router.navigateByUrl('')
  }

  deleteconfirm()
  {
    this.accountnum=JSON.parse(localStorage.getItem('currentAcno') || '')
  }

}
