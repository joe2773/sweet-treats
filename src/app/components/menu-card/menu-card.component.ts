import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/model/MenuItem';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  @Input() public menuItem : MenuItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
