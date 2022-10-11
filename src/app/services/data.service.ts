import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cuser:any
  currentAcno:any

  userDetails: any = {
    1000: { acno: 1000, username: "John", password: 123, balance: 200000,transaction:[] },
    1001: { acno: 1001, username: "Akhil", password: 234, balance: 100000,transaction:[] },
    1002: { acno: 1002, username: "Chrismon", password: 345, balance: 300000,transaction:[] },
    1003: { acno: 1003, username: "Alen", password: 456, balance: 600000,transaction:[] },
  }

  constructor() {
  this.getDetails()

   }

  saveDetails()
  {
    if(this.userDetails)
    {
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.cuser)
    {
      localStorage.setItem('currentUser',JSON.stringify(this.cuser))
    }
    if(this.currentAcno)
    {
      localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
    }
  }

  getDetails()
  {
    if(localStorage.getItem('database'))
    {
      this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if(localStorage.getItem('currentUser'))
    {
      this.cuser=JSON.parse(localStorage.getItem('currentUser') || '')
    }
    if(localStorage.getItem('currentAcno'))
    {
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || '')
    }
  }

  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username, password, balance: 0, transaction:[] }
      console.log(userDetails);

      this.saveDetails()

      return true
    }
  }

  login(acnum: any, psw: any) {
    let userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['password']) {
        this.cuser=userDetails[acnum]['username']
        this.currentAcno=acnum

        this.saveDetails()

        return true
      }
      else {
        alert('Incorrect Password')
        return false
      }
    }
    else {
      alert("username not exist or incorrect acc number")
      return false
    }
    // alert('Login clicked')
  }

  deposite(acnum: any, passwrd: any, depos: any) {
    let userDetails = this.userDetails
    var amount = parseInt(depos)
    if (acnum in userDetails) {
      if (passwrd == userDetails[acnum]['password']) {
        userDetails[acnum]['balance'] += amount
        userDetails[acnum]['transaction'].push({type:'Credit',amount})

        this.saveDetails()

        return userDetails[acnum]['balance']
      }
      else {
        alert('Incorrect Password')
      }
    }
    else {
      alert("User not Exist")
      return false
    }
  }

  withdraw(acnum1: any, passwrd1: any, withd: any) {
    let userDetails = this.userDetails
    var withamount = parseInt(withd)
    if (acnum1 in userDetails) {
      if (passwrd1 == userDetails[acnum1]['password']) {
        if(withamount<=userDetails[acnum1]['balance']){
        userDetails[acnum1]['balance'] -= withamount
        userDetails[acnum1]['transaction'].push({type:'Debit',withamount})

        this.saveDetails()

        return userDetails[acnum1]['balance']
      }
      else
      {
        alert('Insufficient Balance')
        return false
      }
    }
      else {
        alert('Incorrect Password')
      }
    }
    else {
      alert("User not Exist")
      return false
    }
  }

  getTransaction(acno:any)
  {
  return this.userDetails[acno]['transaction']
  }
  
  }
