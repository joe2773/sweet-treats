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
  public dessertCakes : MenuItem[] = [];
  public favouriteCakes : MenuItem[] = [];
  public signatureCakes : MenuItem[] = [];
  public cupCakes : MenuItem[] = [];
  public cakeSlabs : MenuItem[] = [];

  constructor(
    private menuService : MenuService
  ) { }
    
  ngOnInit(): void {
    this.menu = this.menuService.CreateMenu();

    this.dessertCakes = this.menuService.GetDessertCakes();
    this.favouriteCakes = this.menuService.GetFavouriteCakes();
    this.signatureCakes = this.menuService.GetSignatureCakes();

    //this.cupCakes = this.menuService.GetCupCakes();
    //this.cakeSlabs = this.menuService.GetCakeSlabs();
  
  }

  public menuItemClicked(index : number){
    console.log(this.menu[index].shouldDisplay);
    this.menu[index].shouldDisplay = !this.menu[index].shouldDisplay;
    console.log(this.menu[index].shouldDisplay);
  }

}
