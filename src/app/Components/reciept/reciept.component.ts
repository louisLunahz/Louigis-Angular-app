import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent implements OnInit {
 public receipt: Receipt;
 public total: number=0;

  constructor() { 
    let item=localStorage.getItem("receipt");
    if(item){
      this.receipt=JSON.parse(item);
    }
    }
    

  ngOnInit(): void {
    this.receipt.Items.forEach(element => {
     this.total=this.total+element.IndividualTotal;
   });
  }

}
