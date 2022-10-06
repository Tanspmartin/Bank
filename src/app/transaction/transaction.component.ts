import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

accountno:any
transaction:any

  constructor(private ds:DataService,) {
    this.accountno=this.ds.currentAcno
    this.transaction=this.ds.getTransaction(this.accountno)
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
