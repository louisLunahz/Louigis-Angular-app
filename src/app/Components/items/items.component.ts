import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() items: Item[];
  @Output () onDelete: EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(id: number){
    this.onDelete.emit(id);

  }

}
