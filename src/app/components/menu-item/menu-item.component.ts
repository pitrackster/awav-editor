import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { IMenuItem } from './../../../interfaces/menu-item.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() items: Array<IMenuItem>;
  @Input() label: string;
  @Input() selected = false;

  // sub item clicked
  @Output() clicked = new EventEmitter<IMenuItem>();


  constructor() { }

  ngOnInit(): void {
  }

  toggleSubMenu() {
    console.log('should toggle menu');
    //this.visible = !this.visible;
  }

  itemClicked(item: IMenuItem) {
    console.log('clicked', item);
    // this.visible = false;
    this.clicked.emit(item);
  }

}
