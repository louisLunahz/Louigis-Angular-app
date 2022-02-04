import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-total-card',
  templateUrl: './total-card.component.html',
  styleUrls: ['./total-card.component.css']
})
export class TotalCardComponent implements OnInit {
@Input () total: number;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  continueToPayment(){
   this._router.navigate(['/selectAddress']);
  }

}
