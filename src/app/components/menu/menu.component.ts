import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/MenuItem';
import { MenuService } from 'src/app/services/menuService/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu : MenuItem[] = [];
  constructor(
    private menuService : MenuService
  ) { }
    
  ngOnInit(): void {
    this.menu = this.menuService.CreateMenu();
  }

  public menuItemClicked(index : number){
    console.log(this.menu[index].shouldDisplay);
    this.menu[index].shouldDisplay = !this.menu[index].shouldDisplay;
    console.log(this.menu[index].shouldDisplay);
  }

}
