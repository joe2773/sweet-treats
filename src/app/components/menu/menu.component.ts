import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/MenuItem';
import { MenuService } from 'src/app/services/menuService/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public dessertCakes : MenuItem[] = [];
  public dessertCakesWithImage : MenuItem [] = [];
  public favouriteCakes : MenuItem[] = [];
  public favouriteCakesWithImage : MenuItem [] = [];
  public signatureCakes : MenuItem[] = [];
  public signatureCakesWithImage : MenuItem [] = [];

  constructor(
    private menuService : MenuService
  ) { }
    
  ngOnInit(): void {
    this.dessertCakes = this.menuService.GetDessertCakes();
    this.dessertCakesWithImage = this.menuService.GetDessertCakesWithImage();

    this.favouriteCakes = this.menuService.GetFavouriteCakes();
    this.favouriteCakesWithImage = this.menuService.GetFavouriteCakesWithImage();

    this.signatureCakes = this.menuService.GetSignatureCakes();  
    this.signatureCakesWithImage = this.menuService.GetSignatureCakesWithImage();
  }
}
