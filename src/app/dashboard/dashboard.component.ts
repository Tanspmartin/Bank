import { Component, OnInit } from '@angular/core';
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

  constructor(private ds:DataService) { 

    this.user=this.ds.cuser
  }

  ngOnInit(): void {
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

}
